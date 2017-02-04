/* eslint-env browser, jquery */
export class Projects {

	constructor(dataPaths, locale) {
		this.locale = locale;

		Object.keys(dataPaths).forEach((locale) => {
			jQuery.getJSON(dataPaths[locale], (data) => {
				self.data[locale] = data;
			});
		});
	}

	getProjects() {
		if(!this.locale.getLocale()) {
			return [];
		}
		return this.data[this.locale.getLocale()];
	}

	getProjectsByTag(tag) {
		return this.getProjects().filter((project) => {
			return project.tags.includes(tag);
		});
	}

	getProject(slug) {
		for(var project of this.getProjects()) {
			if(project.slug === slug) {
				return project;
			}
		}
		return null;
	}
}

export default Projects;
