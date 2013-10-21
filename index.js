
/**
 * Turns any function into an array map.
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(fn) {
	return function(arr) {
		return arr.map(fn);
	};
};
