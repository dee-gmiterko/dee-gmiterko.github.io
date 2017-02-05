/* eslint-env browser, jquery */
export class Projects {

	constructor(app, projectsPaths) {
		this.app = app;
		this.projectsPaths = projectsPaths;
	}

	ensureLocale(locale) {
		var self = this;
		if(!self.app.state.projects[locale]) {
			jQuery.getJSON(self.projectsPaths[locale], (data) => {
				var newProjects = self.app.state.projects;
				newProjects[locale] = data;
				self.app.setState({
					'projects': newProjects
				});
			});
		}
	}

	getProjects() {
		if(!this.app.state.locale || !this.app.state.projects[this.app.state.locale]) {
			return [];
		}
		return this.app.state.projects[this.app.state.locale];
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

	getProjectWithEcessors(slug) {
		var project = this.getProject(slug);
		
		if(project == null) {
			return null;
		}

		var mod = (a, n) => {
			return ((a%n)+n)%n;
		}

		var projects = this.getProjects();
		var projectIndex = projects.indexOf(project);
		
		project.predecessor = projects[mod(projectIndex-1, projects.length)];
		project.successor = projects[mod(projectIndex+1, projects.length)];

		return project;
	}
}

export default Projects;
