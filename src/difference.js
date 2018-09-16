if(!Array.prototype._difference){
	Array.prototype._difference=(function(){
		"use strict";
		var length=function(array){
			return array.length;
		};
		var isInteger=function(value){
			return typeof value==='number'&&
			       isFinite(value)&&
			       !(value%1);
		};
		var isArrayLike=function(obj){
			return typeof obj==='object'&&
			       obj!==null&&
			       isInteger(length(obj))&&
			       length(obj)>=0&&
			       length(obj)<=Number.MAX_SAFE_INTEGER;
		};
		var is=function(obj,element){
			var i=0,
			    j;
			while(1){
				if(!isArrayLike(obj[i])){
					continue;
				}
				j=0;
				while(1){
					if(element===obj[i][j]){
						return false;
					}
					if(++j>=length(obj[i])){
						break;
					}
				}
				if(++i>=length(obj)){
					break;
				}
			}
			return true;
		};
		var push=function(array,result,obj){
			var i=0;
			while(i<length(array)){
				if(is(obj,array[i])){
					result.push(array[i]);
				}
				i+=1;
			}
		};
		var pushAll=function(array,result){
			var i=0;
			while(i<length(array)){
				result.push(array[i]);
				i+=1;
			}
		};
		return function(){
			var result=[],
			    args=arguments;
			if(!length(args)){
				pushAll(this,result);
			} else{
				push(this,result,args);
			}  
			return result;
		};
	})();
}