/**
 * 2018-09-06
 * @LinWei
 *
 * polyfill of  
 *
 */

if(!Array.prototype._reduce){
	Array.prototype._reduce=(function(){
		"use strict";
		var isFunction=function(obj){
			return typeof obj==='function';
		};
		var length=function(array){
			return array.length;
		};
		var reduce=function(array,fn){
			for(var i=1,pre;i<length(array);i+=1){
				pre=fn(i===1?array[0]:pre,array[i],i,array);
			}
			return pre;
		};
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		return function(fn){
			if(isFunction(fn)){
				if(!length(this)){
					error('ElementError','The array is empty.');
				}
				return reduce(this,fn);
			}
			error('ArgsError','Not function.');
		};
	})();
}
