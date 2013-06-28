test('Simple Successful', function() {
    var url = 'http://yandex.ru/';
    var ub = new urlBuilder(url);
    ok(ub.getUrl(true) === url, ub.getUrl(true) + ' = ' + url);
});

test('Set Param Successful', function() {
    var url = 'http://yandex.ru/controller/';
    var urlParams = url + 'newParam/added';
    var ub = new urlBuilder(url);
    ok(ub.setParams({'newParam': 'added'}).getUrl(true) == urlParams , ub.getUrl(true) + ' = ' + urlParams);
});

test('Set Params Successful', function() {
    var url = 'http://yandex.ru/controller/';
    var urlParams = url + 'newParam/added/newParam2/added';
    var ub = new urlBuilder(url);
    ok(ub.setParams({'newParam': 'added', 'newParam2': 'added'}).getUrl(true) == urlParams);

    //Get ParamsCount
    ok(ub.getParamsCount() == 2, ub.getParamsCount());
});

test('Get Params Object', function() {
    var url = 'http://yandex.ru/';
    var ub = new urlBuilder(url);
    ok(typeof ub.getParams() == 'object');
});

test('Get Empty Params', function() {
    var url = 'http://yandex.ru/';
    var ub = new urlBuilder(url);
    ok(ub.getParamsCount() === 0);
});

test('Get Domain', function() {
    var url = 'http://yandex.ru/controller/newParam/added/newParam2/added/';
    var ub = new urlBuilder(url);
    ok(ub.getDomain() == 'yandex.ru');

    //Get controller
    ok(ub.getController() == 'controller');
});

test('Get Params Type Get', function() {
    var url = 'http://yandex.ru/search?param1=1&param2=2&param3=3';
    var ub = new urlBuilder(url, 'get');
    ok(ub.getParamsCount() === 3);
});

test('Set Params Type Get', function() {
    var url = 'http://yandex.ru/search';
    var urlParams = '?param1=1&param2=2&param3=3';
    var ub = new urlBuilder(url, 'get');
    ok(ub.setParams({'param1':1,'param2':2, 'param3':3}).getUrl(true) === url + urlParams, ub.getUrl(true) + ' = ' + url + urlParams);

    //with action
    url = 'http://yandex.ru/search/action';
    ub.setUrl(url);
    ok(ub.setParams({'param1':1,'param2':2, 'param3':3}).getUrl(true) === url + urlParams, ub.getUrl(true) + ' = ' + url + urlParams, ub.getUrl(true));

    //only domain
    url = 'http://yandex.ru/';
    ub.setUrl(url);
    ok(ub.setParams({'param1':1,'param2':2, 'param3':3}).getUrl(true) === url + urlParams, ub.getUrl(true) + ' = ' + url + urlParams, ub.getUrl(true));

});

test('Set Url', function() {
    var url = 'http://yandex.ru/';
    var ub = new urlBuilder(url);
    ok(ub.setUrl('http://google.com').getUrl(true) == 'http://google.com/');
});