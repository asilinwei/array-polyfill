if(!Array.prototype._drop){
	Array.prototype._drop=(function(){
		"use strict";
		var length=function(obj){
			return obj.length;
		};
		var process=function(array,c){
			switch(true){
				case c===undefined:
				     return 1;
				case Number.isInteger(Math.floor(+c)):
				     c=Math.floor(+c);
				     return c>=0?c:0;
				default:
				     return 0;          
			}
		};
		var push=function(array,result,c){
			var i=c;
			while(i<length(array)){
				result.push(array[i++]);
			}
		};
		return function(count){
			count=process(this,count);
			var result=[];
			push(this,result,count);
			return result;
		};
	})();
}