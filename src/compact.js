if(!Array.prototype._compact){
	Array.prototype._compact=(function(){
		"use strict";
		var length=function(array){
			return array.length;
		};
		var push=function(array){
			var result=[],
			    i=0;
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

