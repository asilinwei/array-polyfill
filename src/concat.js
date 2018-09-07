/**
 * 2018-09-03
 * @LinWei
 *
 * polyfill of Array.prototype.concat.
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat.
 *
 */

if(!Array.prototype._concat){
	Array.prototype._concat=(function(){
		"use strict";

		var length=function(obj){
			return obj.length;
		};

		var push=function(array,another){
			for(var i=0;i<length(array);i+=1){
				another.push(array[i]);
			}
		};

		var concat=function(array,obj){
			for(var i=0,j;i<length(obj);i+=1){
				if(Array.isArray(obj[i])){
					for(j=0;j<length(obj[i]);j+=1){
						array.push(obj[i][j]);
					}
				} else{
					array.push(obj[i]);
				}
			}
		};
		
		return function(){
			var array=[],args=arguments;
			push(this,array);
			concat(array,args);
			return array;
		};
	})();
}
