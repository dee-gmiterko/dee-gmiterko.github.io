import React, { Component } from 'react';
import Template from './Layout.pug.js';

import './style/app.css';
import 'foundation-sites/js/foundation.js';

class Layout extends Component {
	render() {
		return <Template locale={this.props.route.locale} children={this.props.children} />
	}
}

export default Layout;