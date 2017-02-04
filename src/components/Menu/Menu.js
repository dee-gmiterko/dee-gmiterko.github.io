import React, { Component } from 'react';
import siteSettings from './../../../data/site.json';

import Template from './Menu.pug.js';

export class Menu extends Component {

	render() {
		return <Template locale={this.props.locale} siteSettings={siteSettings}/>
	}
}

export default Menu;