import React, { Component } from 'react';
import Template from './Layout.pug.js';

class Layout extends Component {
	render() {
		return <Template translator={this.props.route.translator} children={this.props.children} changeLocale={this.props.route.changeLocale} />
	}
}

export default Layout;