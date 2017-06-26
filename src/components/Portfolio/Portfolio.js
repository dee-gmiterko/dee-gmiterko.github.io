import React, { Component } from 'react';
import Template from './Portfolio.pug.js';
import siteSettings from './../../../config/site.json';

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
            var t1 = new Date(a.startedAt).valueOf();
            var t2 = new Date(b.startedAt).valueOf();
            if(isNaN(t1) ||  isNaN(t2)) return 0;
            return t2 - t1;
        });

        return <Template translator={this.props.route.translator} siteSettings={siteSettings} projects={projects} />;
    }

    componentDidMount(e) {
        window.myAttachScript();
    }
    componentDidUpdate(e) {
        window.myDetachScript();
        window.myAttachScript();
    }
    componentWillUnmount(e) {
        window.myDetachScript();
    }
}

export default Portfolio;
