if(!Array.prototype._differenceBy){
	Array.prototype._differenceBy=(function(){
		"use strict";
		var isFun=function(obj){
			return typeof obj==='function';
		};
		var isString=function(value){
			return typeof value==='string';
		};
		var length=function(array){
			return array.length;
		};
		var last=function(obj){
			return obj[length(obj)-1];
		};
		var isInteger=function(value){
			return typeof value==='number'&&
			       isFinite(value)&&
			       !(value%1);
		};
		var isArrayLike=function(obj){
			return obj!==null&&
			       isInteger(length(obj))&&
			       !isFun(obj)&&
			       !isString(obj)&&
			       length(obj)>=0&&
			       length(obj)<=Number.MAX_SAFE_INTEGER;
		};
		var is=function(obj,element,iter){
			for(var i=0,j,object;i<length(obj);i+=1){
				if(!isArrayLike(obj[i])){
					continue;
				}
				for(j=0;j<length(obj[i]);j+=1){
					if(isFun(iter)){
						if(element===iter(obj[i][j])){
							return false;
						}
					} else{
						object=obj[i][j];
						if(element[iter]===object[iter]){
							return false;
						}
					}
				}
			}
			return true;
		};
		var iteratee=function(array,result,obj,iter){
			for(var i=0,element;i<length(array);i+=1){
				element=isFun(iter)?iter(array[i]):array[i];
				if(is(obj,element,iter)){
					result.push(array[i]);
				}
			}
		};
		return function(){
			var args=arguments,
			    iter=last(args),
			    result=[];
			if(isFun(iter)||isString(iter)){
				iteratee(this,result,args,iter);
			}
			return result;
		};
	})();
}