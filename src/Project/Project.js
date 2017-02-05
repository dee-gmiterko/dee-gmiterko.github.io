import React, { Component } from 'react';
import dateformat from 'dateformat';
import siteSettings from './../../config/site.json';

import Template from './Project.pug.js';
import TemplateNotFound from './ProjectNotFound.pug.js';

class Project extends Component {
  render() {

	var project = this.props.route.projectsService.getProjectWithEcessors(this.props.params.project);

	var formatDate = (date) => {
		return dateformat(date, this.props.route.translator("DATE_FORMAT"));
	}

	if(project)
    	return <Template translator={this.props.route.translator} siteSettings={siteSettings} project={project} formatDate={formatDate} />
  	else
  		return <TemplateNotFound translator={this.props.route.translator} />
  }
}

export default Project;
