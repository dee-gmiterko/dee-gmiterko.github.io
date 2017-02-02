import React, { Component } from 'react';

import Template from './Portfolio.pug.js';
import siteSettings from './../../data/site.json';
// import './Portfolio.css';

class Portfolio extends Component {
  render() {

  	// var portfolioDescription = 

    return <Template locale={this.props.locale} siteSettings={siteSettings} projects={this.props.projects} />;
  }
}

export default Portfolio;
