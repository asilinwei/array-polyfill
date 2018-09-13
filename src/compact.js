/**
 * 2018-09-13
 * @LinWei
 *
 * feature like _.compact in lodash.
 * see https://lodash.com/docs/4.17.10#compact.
 *
 * for example:
 *
 * var array=[1,3,0,4,null,12,false,'',undefined];
 *
 * console.log(array._compact());
 * // => [1, 3, 4, 12]
 *
 */

if(!Array.prototype._compact){
	Array.prototype._compact=(function(){
		"use strict";

		// the length of array.
		var length=function(array){
			return array.length;
		};

		var push=function(array){
			var result=[],
			    i=0;
			if(!length(array)){
				return result;
			}    
			while(1){
				if(array[i]){
					result.push(array[i]);
				}
				i+=1;
				if(i===length(array)){
					break;
				}
			}
			return result;
		};
		
		return function(){
			return push(this);
		};
	})();
}

