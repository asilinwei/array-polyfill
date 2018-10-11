if (!Array.prototype._xor) {
	Array.prototype._xor = (function() {
		"use strict";

		var length = function(obj) {
			return obj.length;
		};

		var isArrayLike = function(obj) {
			var len = length(obj);
			return typeof obj === 'object' &&
				obj !== null &&
				Number.isInteger(len) &&
				len >= 0 &&
				len <= Number.MAX_SAFE_INTEGER;
		};

		var has = function(obj, element) {
			for (var i = 0; i < length(obj); i += 1) {
				if (obj[i] === element) {
					return true;
				}
			}
			return false;
		};

		var isUnique = function(array, blacklist, element, index) {
			for (var i = index + 1; i < length(array); i += 1) {
				if (!isArrayLike(array[i])) {
					continue;
				}
				if (has(array[i], element)) {
					blacklist.push(element);
					return false;
				}
			}
			return true;
		};

		var chunk = function(array, result, chunk, blacklist, index) {
			for (var i = 0; i < length(chunk); i += 1) {
				if (!has(blacklist, chunk[i]) && !has(result, chunk[i])) {
					if (index === length(array) - 1 ||
						isUnique(array, blacklist, chunk[i], index)) {
						result.push(chunk[i]);
					}
				}
			}
		};

		return function() {
			var result = [],
				blacklist = [];

			for (var i = 0; i < length(this); i += 1) {
				if (!isArrayLike(this[i])) {
					continue;
				}
				chunk(this, result, this[i], blacklist, i);
			}
			return result;
		};
	})();
}