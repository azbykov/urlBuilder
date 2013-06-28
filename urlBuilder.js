/**
 * Work with url
 *
 * @author KiD86@list.ru (https://github.com/azbykov)
 * @date 2012
 * @ver 2.1
 */

/**
 * Constructor Url Builder
 */
function urlBuilder(url, type) {
    var domain,
        controller,
        action,
        paramsObject = {},
        paramsCount = 0,
        paramType = (type && 'get' === type) ? type : 'default',
        actionParamsSeparator = ('get' === paramType) ? '?' : '/',
        paramsSeparator = ('get' === paramType) ? '=' : '/',
        paramsSeparatorEnd = ('get' === paramType) ? '&' : '/'
    ;

    var fillParamsObject = function(urlArray) {
        var i;
        if ('get' === type) {
            var urlParams = urlArray[urlArray.length - 1].split('?'),
                paramObject
            ;
            if (controller && controller !== urlParams[0]) {
                action = urlParams[0];
            } else {
                controller = urlParams[0];
            }
            urlParams = (urlParams[1]) ? urlParams[1].split('&') : [];
            for (i = 0; i < urlParams.length; i++) {
                paramObject = urlParams[i].split('=');
                paramsObject[paramObject[0]] = paramObject[1];
            }
        } else {
            for (i = 3; i < urlArray.length; i = i + 2) {
                paramsObject[urlArray[i]] = urlArray[i + 1];
            }
        }

    };

    var getParamsCount = function() {
        var obj,
            i = 0
        ;
        for (obj in paramsObject) {
            if (paramsObject.hasOwnProperty(obj) && obj.length > 0) {
                i++;
            }
        }
        return i;
    };

    /**
     * init constructor
     *
     * @param url
     */
    var init = function(url) {
        var stringUrl = url.replace('http://',''),
            urlArray = stringUrl.split('/')
            ;
        domain = urlArray[0];
        controller = (undefined !== urlArray[1] && urlArray[1].length > 0) ? urlArray[1] : false;
        action = (undefined !== urlArray[2] && urlArray[2].length > 0) ? urlArray[2] : false;
        fillParamsObject(urlArray);
        paramsCount = getParamsCount();
    };

    if(url){
        init(url);
    }

    var getUrlParams = function() {
        var urlParams = (paramsCount > 0) ? actionParamsSeparator : '',
            key,
            i = 1
        ;
        for (key in paramsObject) {
            if (key !== '' && undefined !== key) {
                urlParams += (key + paramsSeparator + paramsObject[key]);
                urlParams += (paramsCount > i) ? paramsSeparatorEnd : '';
                i++;
            }
        }
        return urlParams;
    };

    return {
        setDomain: function(string) {
            domain = string;
            return this;
        },
        getDomain: function() {
            return domain;
        },
        setController: function(string){
            controller = string;
            return this;
        },
        getController: function(){
            return controller;
        },
        getParams: function() {
            if (arguments.length === 1) {
                return paramsObject[arguments[0]];
            } else {
                return paramsObject;
            }
        },
        setParams: function() {
            if (typeof arguments[0] == 'object'){
                paramsObject = arguments[0];
            } else {
                for(var i = 0; i < arguments.length; i++){
                    paramsObject[arguments[i]] = arguments[++i];
                }
            }
            paramsCount = getParamsCount();
            return this;
        },
        getParamsCount: function() {
            return paramsCount;
        },
        setUrl: function(string) {
            init(string);
            return this;
        },
        getUrl: function(prefix){
            var newUrl = '/';
            if(prefix){
                newUrl = 'http://' + domain + '/';
            }
            newUrl += (false !== controller) ? controller : '';
            newUrl += (false !== action) ? '/' + action : '';
            newUrl += getUrlParams();
            return newUrl;
        }
    };
}