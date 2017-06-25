import React, { Component } from 'react';
import Template from './Layout.pug.js';

class Layout extends Component {
	render() {

		var loading = this.props.route.projectsService.getProjects().length === 0;
		console.log(loading, this.props.route.projectsService.getProjects());

		return <Template loading={loading} translator={this.props.route.translator} children={this.props.children} changeLocale={this.props.route.changeLocale} />
	}
}

export default Layout;