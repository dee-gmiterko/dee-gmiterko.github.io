/* eslint-env browser, jquery */

export function slowScrollTo(selector) {
	return () => {
		var $target = $(selector);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	}
}