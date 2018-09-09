/**
 * 2018-09-09
 * @LinWei
 *
 * polyfill of Array.prototype.join
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 */

if(!Array.prototype._join){
	Array.prototype._join=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		var join=function(array,string){
			var str='',
			    i=0,
			    count=0,
			    total=2*length(array)-1;
			while(count<total){
				str+=!(count%2)?array[i++]:string;
				count+=1;
			}   
			return str; 
		};

		return function(string){
			string=string!==undefined?string:',';
			return join(this,''+string);
		};
	})();
}
