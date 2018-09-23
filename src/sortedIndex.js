/**
 * 2018-09-23
 * @LinWei
 *
 * feature like _.sortedIndex in lodash.
 * see https://lodash.com/docs/4.17.10#sortedIndex.
 *
 * for example:
 * 
 * var array = [20, 30];
 *
 * console.log(array._sortedIndex(25));
 * // => 1
 *
 */

if(!Array.prototype._sortedIndex){
	Array.prototype._sortedIndex=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		// check if it is string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if it is number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// binary search.
		var find=function(array,value,low,high){
			if(low<high){
				var mid=Math.floor((low+high)/2),    
					computed=isNumber(value)?array[mid]:''+array[mid];	  
				if(value>computed){
					low=mid+1;   
				} else{
					high=mid;   
				}
				return find(array,value,low,high);
			}
			return high;
		};
		
		return function(value){
			var low=0,
				high=length(this);  
			value=isNumber(value)?value:''+value;   
			return find(this,value,low,high);
		};
	})();
}