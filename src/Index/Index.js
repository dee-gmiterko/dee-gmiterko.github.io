import React, { Component } from 'react';
import { Link } from 'react-router'

import template from './Index.pug.js';
// import './Index.css';

var res = pact.compile(template, {
    	siteTitle: "Ienze",
    	Link
    });

class Index extends Component {
  render() {
    return template;
  }
}

export default Index;
