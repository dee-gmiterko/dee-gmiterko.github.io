import React, { Component } from 'react';
import Seedrandom from 'seedrandom';
import siteSettings from './../../../config/site.json';

import Template from './Index.pug.js';

const PROEJCTS_COUNT = 8;

class Index extends Component {
	
	render() {
		var random = new Seedrandom(""+Math.floor(new Date().getTime() / 3600000));

		var projects = this.props.route.projectsService.getProjects().slice();

		//shufle
		for (let i = projects.length; i; i--) {
			let j = Math.floor(random() * i);
			[projects[i - 1], projects[j]] = [projects[j], projects[i - 1]];
		}

		projects = projects.slice(0, PROEJCTS_COUNT);

		projects.sort(function(a, b){
			return (new Date(a.startedAt).valueOf() < new Date(b.startedAt).valueOf());
		});

		return <Template translator={this.props.route.translator} siteSettings={siteSettings} projects={projects} />
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

export default Index;
