import React, { Component } from 'react';

import Template from './Project.pug.js';
import siteSettings from './../../data/site.json';
// import './Project.css';

class Project extends Component {
  render() {
    return <Template locale={this.props.locale} siteSettings={siteSettings} project={this.props.project} />
  }
}

export default Project;
