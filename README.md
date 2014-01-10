urlBuilder.js
========

100% native and cool working with links JavaScript

 * fast
 * 100% native javascript
 * Works in all major browsers

## Usage

```javascript
var urlB = new urlBuilder('http://www.yandex.ru/yandsearch?text=azbykov&lr=2');
urlB.setParams({'text': 'urlBuilder'}); // Set new params
console.log(urlB.getUrl()); // Get url
// http://www.yandex.ru/yandsearch?text=urlBuilder&lr=2


console.log(urlB.getParams()) // Get params
// {
//    text: 'urlBuilder',
//    lr: 2
// }


console.log(urlB.getParamsCount()) // Get params count
// 2


console.log(urlB.getDomain()) // Get domain
// yandex.ru


console.log(urlB.getController()) // Get controller
// yandsearch
```

```javascript

```
