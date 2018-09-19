/**
 * 2018-09-19
 * @LinWei
 *
 * feature like _.differenceBy in lodash.
 * see https://lodash.com/docs/4.17.10#differenceBy.
 *
 * for example:
 * 
 * var array = [1.2, 3.4, 4.2, 6.3];
 *
 * console.log(array._differenceBy(
 * 		[1.4],
 *		[3.5, 4.6],
 *		Math.floor
 * ));
 * // => [6.3]
 *
 * array = [{x:1},{x:2}];
 *
 * console.log(array._differenceBy([{x:1}],'x'))
 * // => [{x:2}]
 *
 */

if(!Array.prototype._differenceBy){
	Array.prototype._differenceBy=(function(){
		"use strict";

		// check if it is function.
		var isFun=function(obj){
			return typeof obj==='function';
		};

		// check if it is string.
		var isString=function(value){
			return typeof value==='string';
		};

		var length=function(array){
			return array.length;
		};

		var last=function(obj){
			return obj[length(obj)-1];
		};

		// check if it is integer.
		var isInteger=function(value){
			return typeof value==='number'&&
			       isFinite(value)&&
			       !(value%1);
		};

		// check if it is array-like object.
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