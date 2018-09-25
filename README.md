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
see [_.chunk](https://lodash.com/docs/4.17.10#chunk) in lodash.
    
Example:  
```
var array = [1, 2, 3, 4, 5];

array._chunk()
// => [[1], [2], [3], [4], [5]]

array._chunk(2)
// => [[1, 2], [3, 4], [5]]

array._chunk(3)
// => [[1, 2, 3], [4, 5]]

array._chunk('a')
// => null
```                                                              
---------------------------------
---------------------------------             
```
Array.prototype._compact
```     
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/compact.js)     
see [_.compact](https://lodash.com/docs/4.17.10#compact) in lodash.
       
Example:
```
var array = [0, 1, false, 2, '', 3];

array._compact()
// => [1, 2, 3]
```       
------------------------------
------------------------------
```
Array.prototype._difference
```       
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/difference.js)          
see [_.difference](https://lodash.com/docs/4.17.10#difference) in lodash.      
       
Example:            
```
var array = [1, 2, 3, 4, 5];

array._difference([1, 2], [3, 4])
// => [5]
```      
-----------------------------
-----------------------------
```
Array.prototype._differenceBy
```
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/differenceBy.js)    
see [_.differenceBy](https://lodash.com/docs/4.17.10#differenceBy) in lodash.   
           
Example:
```
var array = [2.1, 1.2];

array._differenceBy(
    [2.3, 3.4],
    Math.floor
)
// => [1.2]

array._differenceBy(
    {
    	'0' : 2.3,
    	'1' : 3.4,
    	length : 2
    },
    Math.floor
)
// => [1.2]

array = [{x:1}, {x:2}];

array._differenceBy([{x:1}], 'x')
// => [{x:2}]
```           
-----------------------------
-----------------------------
```
Array.prototype._drop
```   
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/drop.js)       
see [_.drop](https://lodash.com/docs/4.17.10#drop) in lodash.    
        
Example:
```
var array = [1, 2, 3, 4, 5];

array._drop()
// => [2, 3, 4, 5]

array._drop(2)
// => [3, 4, 5]

array._drop(100)
// => []
```        
-----------------------------
-----------------------------
```
Array.prototype._fill
```
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/fill.js)     
see [_.fill](https://lodash.com/docs/4.17.10#fill) in lodash.   
        
```
var array = [1, 2, 3, 4, 5];

array._fill('a', 1, 4);

console.log(array);
// => [1, 'a', 'a', 'a', 5]
```        
-----------------------------
-----------------------------
```
Array.prototype._flattenDepth
```   
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/flattenDepth.js)       
see [_.flattenDepth](https://lodash.com/docs/4.17.10#flattenDepth) in lodash.    
         
Example:
```
var array = [1, [2, 3, [4]], 5, [6]];

array._flattenDepth(1)
// => [1, 2, 3, [4], 5, 6]

array._flattenDepth(2)
// => [1, 2, 3, 4, 5, 6]
```   
--------------------------------
--------------------------------
```
Array.prototype._fromPairs
```   
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/fromPairs.js)       
see [_.fromPairs](https://lodash.com/docs/4.17.10#fromPairs) in lodash.     
        
Example:
```
var array = [['a', 1], ['b', 2]];

array._fromPairs()
// => {'a': 1, 'b': 2}

// array-like object.

array[0] = {
    '0': 'a',
    '1': 1,
    length: 2
};

array[1] = {
    '0': 'b',
    '1': 2,
    length: 2
};

array._fromPairs()
// => {'a': 1, 'b': 2}
```        
--------------------------------
--------------------------------
```
Array.prototype._sortedIndex
```    
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/sortedIndex.js)     
see [_.sortedIndex](https://lodash.com/docs/4.17.10#sortedIndex) in lodash.       
         
Example:
```
var array = [30, 50];

array._sortedIndex(40)
// => 1
```
--------------------------------
--------------------------------
```
Array.prototype._zip
```   
[source](https://github.com/asilinwei/array-polyfill/blob/master/src/zip.js)     
see [_.zip](https://lodash.com/docs/4.17.10#zip) in lodash.   
       
Example:   
```
var array = [['a', 'b'], [1, 2], [true, false]];

array._zip()
// => [['a', 1, true], ['b', 2, false]]
```             