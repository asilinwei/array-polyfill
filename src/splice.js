/**
 * 2018-09-01
 * @LinWei
 *
 * polyfill of Array.prototype.splice.
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice.
 *
 */

if(!Array.prototype._splice){
	Array.prototype._splice=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var remove=function(array,del,start,c){
			for(var k=0,i;k<c;k+=1){
				del.push(array[start]);
				for(i=start;i<length(array)-1;i+=1){
					array[i]=array[i+1];
				}
				array.length-=1;
			}
		};

		var add=function(array,obj,start){
			for(var k=length(obj)-1,i;k>=2;k-=1){
				for(i=length(array)-1;i>=start;i-=1){
					array[i+1]=array[i];
				}
				array[start]=obj[k];
			}
		};

		return function(start,count){
			var del=[];
			if(isNumber(start)&&isNumber(count)){
				if(start>=length(this)-1||count>length(this)-start){
					return;
				}
				remove(this,del,start,count);
				add(this,arguments,start);
			}
			return del;
		};
		
	})();
}