import React, { Component } from 'react';
import siteSettings from './../../../config/site.json';

import Template from './Menu.pug.js';

export class Menu extends Component {

	render() {
		return <Template translator={this.props.translator} siteSettings={siteSettings}/>
	}
}

export default Menu;