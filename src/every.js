/**
 * 2018-09-04
 * @LinWei
 *
 * Polyfill of Array.prototype.every
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every.
 *
 */

if(!Array.prototype._every){
	Array.prototype._every=(function(){
		"use strict";

		// check if it is function.
		var isFunction=function(obj){
			return typeof obj==='function';
		};

		var length=function(array){
			return array.length;
		};

		var is=function(array,fn){
			for(var i=0;i<length(array);i+=1){
				if(!fn(array[i],i,array)){
					return false;
				}
			}
			return true;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(fn){
			if(isFunction(fn)){
				return is(this,fn);
			}
			error('ArgsError','Not function.');
		};
		
	})();
}
