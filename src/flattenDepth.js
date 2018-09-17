/**
 * 2018-09-17
 * @LinWei
 *
 * feature like _.flattenDepth in lodash.
 * see https://lodash.com/docs/4.17.10#flattenDepth.
 *
 * for example:
 * 
 * var array = [1, [2, 3, [4]], 5, [6]];
 *
 * console.log(array._flattenDepth(1));
 * // => [1, 2, 3, [4], 5, 6]
 *
 * console.log(array._flattenDepth(2));
 * // => [1, 2, 3, 4, 5, 6]
 *
 */

if(!Array.prototype._flattenDepth){
	Array.prototype._flattenDepth=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return Array.isArray(obj);
		};

		var flatten=function(array,result,depth,c){
			for(var i=0;i<length(array);i+=1){
				if(isArray(array[i])&&c<depth){
					flatten(array[i],result,depth,c+1);
				} else{
					result.push(array[i]);
				}
			}
		};
		
		return function(depth){
			depth=isNumber(depth)&&depth>=0?depth:0;
			var result=[];
			flatten(this,result,depth,0);
			return result;
		};
	})();
}