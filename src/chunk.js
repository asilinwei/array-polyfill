if(!Array.prototype._chunk){
	Array.prototype._chunk=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

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