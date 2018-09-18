/**
 * 2018-09-18
 * @LinWei
 *
 * feature like _.zip in lodash.
 * see https://lodash.com/docs/4.17.10#zip.
 *
 * for example:
 *
 * var array = [['a', 'b'], [1, 2], [true, false]];
 *
 * console.log(array._zip());
 * // => [['a', 1, true], ['b', 2, false]]
 *
 */

if(!Array.prototype._zip){
	Array.prototype._zip=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		// maximum length
		var max=function(array){
			for(var i=0,max=0;i<length(array);i+=1){
				if(!Array.isArray(array[i])){
					continue;
				}
				if(max<length(array[i])){
					max=length(array[i]);
				}
			}
			return max;
		};

		var zip=function(array,result,len){
			for(var i=0,j,chunk;i<len;i+=1){
				chunk=[];
				for(j=0;j<length(array);j+=1){
					if(!Array.isArray(array[j])){
						continue;
					}
					chunk.push(array[j][i]);
				}
				result.push(chunk);
			}
		};
		
		return function(){
			var result=[];
			zip(this,result,max(this));
			return result;
		};
	})();
}