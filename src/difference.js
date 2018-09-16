/**
 * 2018-09-16
 * @LinWei
 *
 * feature like _.difference in lodash.
 * see https://lodash.com/docs/4.17.10#difference.
 *
 * for example:
 *
 * var array=[1,2,3,4,5];
 *
 * console.log(array._difference([1,2],[4,5]));
 * // => [3]
 *
 */

if(!Array.prototype._difference){
	Array.prototype._difference=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		/* check if it is integer. */
		var isInteger=function(value){
			return typeof value==='number'&&
			       isFinite(value)&&
			       !(value%1);
		};

		/*
		 an object is considered array-like
		 if it is not function and has obj.length
		 that's an integer greater than or equal to 0
		 and less than or equal to Number.MAX_SAFE_INTEGER.
		*/
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