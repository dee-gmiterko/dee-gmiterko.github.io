class Locale {

	/*
	Format of locales:
	{
		"sk": {
			"error": "Chyba"
		},
		"en": {
			"error": "Error"
		}
	}
	*/
	constructor(locales, defaultLocale) {
		this.locales = locales;
		this.setLocale(defaultLocale);
	}

	setLocale(localeName) {
		if(!this.locales[localeName]) {
			throw new Error("Locale "+localeName+" not found");
		}
		this.locale = localeName;
	}

	getTranslations() {
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
