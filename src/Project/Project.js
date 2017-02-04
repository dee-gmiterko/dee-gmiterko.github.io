import React, { Component } from 'react';

import Template from './Project.pug.js';
import siteSettings from './../../data/site.json';

class Project extends Component {
  render() {

	var project = this.props.route.projectsService.getProject(this.props.params.project);

    return <Template locale={this.props.route.locale} siteSettings={siteSettings} project={project} />
  }
}

export default Project;
