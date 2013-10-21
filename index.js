
/**
 * Turns any function into an array map.
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(fn) {
	return function(arr) {
		var cp = [];
		for(var i = 0, l = arr.length; i < l; i++) {
			cp[i] = fn(arr[i]);
		}
		return cp;
	};
};
