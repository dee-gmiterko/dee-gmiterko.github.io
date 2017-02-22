/* eslint-env browser, jquery */
import {Locales as LocaleMatcher} from 'locale';

export class Locales {

	constructor(app, localesPaths) {
		this.app = app;
		this.localesPaths = localesPaths;
	}

	ensureLocale(locale) {
		var self = this;
		if(!self.app.state.locales[locale]) {
			jQuery.getJSON(self.localesPaths[locale], (data) => {
				var newLocales = self.app.state.locales;
				newLocales[locale] = data;
				self.app.setState({
					'locales': newLocales
				});
			});
		}
	}

	getTranslations() {
		if(!this.app.state.locale || !this.app.state.locales[this.app.state.locale]) {
			return {};
		}
		return this.app.state.locales[this.app.state.locale];
	}

	getTranslator() {
		var self = this;
		return (key) => {
			if(self.getTranslations()[key]) {
				return self.getTranslations()[key];
			}
			return key;
		}
	}

	findBestLocale() {
		var supported = new LocaleMatcher(['en', 'sk', 'cs']);

		var locales = new LocaleMatcher(navigator.languages || [navigator.language]);
		var best = locales.best(supported);

		return best.code === 'cs' ? 'sk' : best.code;
	}
}

export default Locales;
