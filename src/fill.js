/**
 * 2018-09-25
 * @LinWei
 *
 * feature like _.fill in lodash.
 * see https://lodash.com/docs/4.17.10#fill.
 *
 * for example:
 *
 * var array = [1, 2, 3, 4, 5];
 *
 * console.log(array._fill('a'));
 * // => ['a', 'a', 'a', 'a', 'a']
 *
 * array = [1, 2, 3, 4, 5];
 * 
 * console.log(array._fill('a', 1, 4));
 * // => [1, 'a', 'a', 'a', 5]
 *
 */

if(!Array.prototype._fill){
	Array.prototype._fill=(function(){
		"use strict";

		var length=function(array){
			return array.length;
		};

		// check if it is number.
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