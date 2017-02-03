import React, { Component } from 'react';

import Template from './Index.pug.js';
import siteSettings from './../../data/site.json';
// import './Index.css';

class Index extends Component {
  render() {
    return <Template locale={this.props.locale} siteSettings={siteSettings} />
  }
}

export default Index;
