import React, { Component } from 'react';
import Template from './Index.pug.js';
import siteSettings from './../../config/site.json';

class Index extends Component {
  render() {
  	
  	var projects = this.props.route.projectsService.getProjects().slice();
  	projects.sort(function(a, b){
  		return (new Date(a.startedAt).valueOf() < new Date(b.startedAt).valueOf());
  	});
  	projects = projects.slice(0, 16);

    return <Template locale={this.props.route.locale} siteSettings={siteSettings} projects={projects} />
  }
}

export default Index;
