urlBuilder.js
========

100% native and cool working with links JavaScript

 * fast
 * 100% native javascript
 * Works in all major browsers

## Usage

```javascript
var urlB = new urlBuilder('http://www.yandex.ru/yandsearch?text=azbykov&lr=2');


// Set new params
urlB.setParams({'text': 'urlBuilder'}); 

// Get url
urlB.getUrl(); 
// http://www.yandex.ru/yandsearch?text=urlBuilder&lr=2

// Get params
urlB.getParams(); 
// {
//    text: 'urlBuilder',
//    lr: 2
// }

// Get params count
urlB.getParamsCount(); 
// 2

// Get domain
urlB.getDomain(); 
// yandex.ru

// Get controller
urlB.getController(); 
// yandsearch
```

```javascript

```
