if(!Array.prototype._sortedIndex){
	Array.prototype._sortedIndex=(function(){
		"use strict";
		var length=function(array){
			return array.length;
		};
		var isString=function(value){
			return typeof value==='string';
		};
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};
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