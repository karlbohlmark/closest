var matches = require('matches');
module.exports = function (el, selector) {
	while ( (el = el.parentNode) && !matches(el, selector));
	return el;
};