if(!Array.prototype._fill){
	Array.prototype._fill=(function(){
		"use strict";
		var length=function(array){
			return array.length;
		};
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};
		var modify=function(array,element,start,end){
			start=start>=0?start:0;
			end=end<=length(array)?end:length(array);
			for(var i=start;i<end;i+=1){
				array[i]=element;
			}
		};
		return function(element,start,end){
			start=start!==undefined?Math.floor(+start):0;
			end=end!==undefined?Math.floor(+end):length(this);
			if(isNumber(start)&&isNumber(end)){
				modify(this,element,start,end);
			}
			return this;
		};
	})();
}