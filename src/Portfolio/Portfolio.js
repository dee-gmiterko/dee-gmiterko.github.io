import React, { Component } from 'react';
import Template from './Portfolio.pug.js';
import siteSettings from './../../config/site.json';

class Portfolio extends Component {
    
    render() {

        var projects;
        if(this.props.params && this.props.params.tag) {
            projects = this.props.route.projectsService.getProjectsByTag(this.props.params.tag);
        } else {
            projects = this.props.route.projectsService.getProjects();
        }

        projects = projects.slice();
        projects.sort(function(a, b){
            return (new Date(a.startedAt).valueOf() < new Date(b.startedAt).valueOf());
        });

        return <Template translator={this.props.route.translator} siteSettings={siteSettings} projects={projects} />;
    }

    componentDidMount(e) {
        window.myAttachScript();
    }
    componentDidUpdate(e) {
        window.myAttachScript();
    }
}

export default Portfolio;
