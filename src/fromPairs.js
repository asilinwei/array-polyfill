/**
 * 2018-09-21
 * @LinWei
 *
 * feature like _.fromPairs in lodash.
 * see https://lodash.com/docs/4.17.10#fromPairs.
 *
 * for example:
 *
 * var array=[['a',1],['b',2]];
 *
 * console.log(array._fromPairs());
 * // => {'a': 1, 'b': 2}
 *
 */

if(!Array.prototype._fromPairs){
	Array.prototype._fromPairs=(function(){
		"use strict";

		// the length of array-like object.
		var length=function(obj){
			return obj.length;
		};

		// check if it is array-like object.
		var isArrayLike=function(obj){
			return typeof obj==='object'&&
				   obj!==null&&
				   Number.isInteger(length(obj))&&
				   length(obj)>=0&&
				   length(obj)<=Number.MAX_SAFE_INTEGER;
		};

		// add property.
		var add=function(array,o){
			for(var i=0;i<length(array);i+=1){
				if(!isArrayLike(array[i])){
					continue;
				}
				o[array[i][0]]=array[i][1];
			}
		};

		return function(){
			var obj={};
			add(this,obj);
			return obj;
		};
		
	})();
}