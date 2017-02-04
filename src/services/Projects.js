export class Projects {

	constructor(data, locale) {
		this.data = data;
		this.locale = locale;
	}

	getProjects() {
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
	}
}

export default Projects;
