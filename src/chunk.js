/**
 * 2018-09-12
 * @LinWei
 *
 * feature like _.chunk in lodash.
 * see https://lodash.com/docs/4.17.10#chunk.
 *
 * for example:
 * 
 * var array=[1,2,3,4,5];
 * 
 * console.log(array._chunk());
 * // => [[1], [2], [3], [4], [5]]
 *
 * console.log(array._chunk(2));
 * // => [[1, 2], [3, 4], [5]]
 *
 * console.log(array._chunk(3))
 * // => [[1, 2, 3], [4, 5]]
 *
 * console.log(array._chunk('hello'))
 * // => null
 *
 */

if(!Array.prototype._chunk){
	Array.prototype._chunk=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// chekc if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var length=function(array){
			return array.length;
		};

		var chunk=function(array,size){
			var result=[],
			    chunk=[],
			    i=0;
			if(size<=0){
				return result;
			}    
			while(1){
				chunk.push(array[i++]);
				if(i===length(array)){
					result.push(chunk);
					break;
				}
				if(length(chunk)===size){
					result.push(chunk);
					chunk=[];
				}
			}    
			return result;
		};

		return function(size){
			size=size!==undefined?size:1;
			return isNumber(size)?chunk(this,size):null;
		};
	})();
}