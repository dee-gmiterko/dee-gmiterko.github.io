/* eslint-env browser, jquery */

import './linda/42.js';
import './linda/metroNavigation.js';
import './linda/metroNavigationGrab.js';
import './linda/menuAddons.js';
import './linda/slowAnchorScroll.js';

$(function () {

	try {
		$("#menu-open").sticky({topSpacing: 0});
	} catch (e) {
		console.warn(e);
	}

	try {
		var menu = $("#menu");
		menu.menuAddons();

		var metroNavigation = $(".metroNavigation");
		metroNavigation.metroNavigation();
		metroNavigation.metroNavigationGrab();
	} catch (e) {
		console.warn(e);
	}

	// try {
	// 	var panorama = $("#panorama .panorama-content");
	// 	if (panorama.size()) {
	// 		panorama.empty();

	// 		var panoramaPortfolio = $('<ul class="portfolio"></ul>');
	// 		panorama.append(panoramaPortfolio);

	// 		panoramaPortfolio.load("/portfolio");
	// 	}
	// } catch (e) {
	// 	console.warn(e);
	// }

	// try {
	// 	$(".image-popup").each(function () {
	// 		$(this).imagePopup();
	// 	});

	// } catch (e) {
	// 	console.warn(e);
	// }

	try {
		$('a.slowScrollTo').slowAnchorScroll();
	} catch (e) {
		console.warn(e);
	}

	try {
		$('a').each(function () {
			var a = new RegExp('/' + window.location.host + '/');
			var b = new RegExp('^http');
			if (!a.test(this.href) && b.test(this.href)) {
				$(this).attr("target", "_blank");
				$(this).addClass("externalLink");
			}
		});
	} catch (e) {
		console.warn(e);
	}

	// Initialise foundation
	$(document).foundation();
});