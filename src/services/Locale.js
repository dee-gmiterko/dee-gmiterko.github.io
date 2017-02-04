/* eslint-env browser, jquery */
export class Locale {

	constructor(localesPaths, defaultLocale) {
		var self = this;
		this.locales = [];

		Object.keys(localesPaths).forEach((locale) => {
			jQuery.getJSON(localesPaths[locale], (data) => {
				self.locales[locale] = data;

				if(locale == defaultLocale) {
					this.setLocale(defaultLocale);
				}
			});
		});
	}

	setLocale(localeName) {
		if(!this.locales[localeName]) {
			throw new Error("Locale "+localeName+" not found");
		}
		this.locale = localeName;
	}

	getLocale() {
		return this.locale;
	}

	getTranslations() {
		if(!this.locale) {
			return {};
		}
		return this.locales[this.locale];
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
}

export default Locale;
