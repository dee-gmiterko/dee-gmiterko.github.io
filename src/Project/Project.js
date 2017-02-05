import React, { Component } from 'react';

import Template from './Project.pug.js';
import TemplateNotFound from './ProjectNotFound.pug.js';
import siteSettings from './../../config/site.json';

class Project extends Component {
  render() {

	var project = this.props.route.projectsService.getProject(this.props.params.project);

	if(project)
    	return <Template translator={this.props.route.translator} siteSettings={siteSettings} project={project} />
  	else
  		return <TemplateNotFound translator={this.props.route.translator} />
  }
}

export default Project;
