if(!Array.prototype._flattenDepth){
	Array.prototype._flattenDepth=(function(){
		"use strict";
		var length=function(array){
			return array.length;
		};
		var typeOf=function(value){
			return typeof value;
		};
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};
		var isArray=function(obj){
			return Array.isArray(obj);
		};
		var flatten=function(array,result,depth,c){
			for(var i=0;i<length(array);i+=1){
				if(isArray(array[i])&&c<depth){
					flatten(array[i],result,depth,c+1);
				} else{
					result.push(array[i]);
				}
			}
		};
		return function(depth){
			depth=isNumber(depth)&&depth>=0?depth:0;
			var result=[];
			flatten(this,result,depth,0);
			return result;
		};
	})();
}