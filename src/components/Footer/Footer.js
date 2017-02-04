import React, { Component } from 'react';
import siteSettings from './../../../data/site.json';

import Template from './Footer.pug.js';

export class Footer extends Component {

	render() {
		return <Template locale={this.props.locale} siteSettings={siteSettings}/>
	}
}

export default Footer;