# array-polyfill
There are some polyfills about Array.  

2018-09-01  
LinWei  

You can use them as polyfills.  
  
Content: 

| Native | Polyfill |
|--------|----------|
|[splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice.)|[splice.js](https://github.com/asilinwei/array-polyfill/blob/master/src/splice.js)|
|[concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)|[concat.js](https://github.com/asilinwei/array-polyfill/blob/master/src/concat.js)|
|[every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)|[every.js](https://github.com/asilinwei/array-polyfill/blob/master/src/every.js)|
|[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)|[reduce.js](https://github.com/asilinwei/array-polyfill/blob/master/src/reduce.js)|
|[join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)|[join.js](https://github.com/asilinwei/array-polyfill/blob/master/src/join.js)|  
  
New features:  
There are some new methods,  
the features of them are similar  
to the methods about Array in 
[lodash](https://lodash.com/).  
   
```
Array.prototype._chunk
```   
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/chunk.js)  
see [_.chunk](https://lodash.com/docs/4.17.10#chunk)        