 /**
 * @preserve jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * @copyright © 2008 George McGinley Smith, all rights reserved
 * @copyright © 2001 Robert Penner, all rights reserved.
 * @license BSD License
 */

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
});
