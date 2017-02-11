/* eslint-env browser, jquery */

import './linda/42.js';
import './linda/metroNavigation.js';
import './linda/metroNavigationGrab.js';
import './linda/menuAddons.js';
import './linda/imagePopup.js';
import {slowScrollTo} from './utils';

var attach = (element) => {

	try {
		element.find(".image-popup").each(function () {
			$(this).imagePopup();
		});
	} catch (e) {
		console.warn(e);
	}

	try {
		var wh = $(window).height() - 100;
		$(".image-fit-window").each(function () {
			if($(this).height() > wh) {
				$(this).height(wh);
			}
		});
	} catch (e) {
		console.warn(e);
	}

	try {
		element.find('a').each(function () {
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
};

var detach = (element) => {
	element.find("*").off();
}

window.myAttachScript = () => {
	attach($("#content"));
	slowScrollTo("#top")();
}

window.myDetachScript = () => {
	detach($("#content"));
}

$(() => {

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

	attach($("body :not(#content)"));

	// Initialise foundation
	$(document).foundation();
});