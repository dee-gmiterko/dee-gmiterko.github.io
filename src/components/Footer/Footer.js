import React, { Component } from 'react';
import siteSettings from './../../../config/site.json';

import Template from './Footer.pug.js';

export class Footer extends Component {

	render() {
		return <Template translator={this.props.translator} changeLocale={this.props.changeLocale} siteSettings={siteSettings}/>
	}
}

export default Footer;