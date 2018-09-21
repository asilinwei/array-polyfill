if(!Array.prototype._fromPairs){
	Array.prototype._fromPairs=(function(){
		"use strict";
		var length=function(obj){
			return obj.length;
		};
		var isArrayLike=function(obj){
			return typeof obj==='object'&&
				   obj!==null&&
				   Number.isInteger(length(obj))&&
				   length(obj)>=0&&
				   length(obj)<=Number.MAX_SAFE_INTEGER;
		};
		var add=function(array,o){
			for(var i=0;i<length(array);i+=1){
				if(!isArrayLike(array[i])){
					continue;
				}
				o[array[i][0]]=array[i][1];
			}
		};
		return function(){
			var obj={};
			add(this,obj);
			return obj;
		};
	})();
}