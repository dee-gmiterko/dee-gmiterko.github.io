import { Component } from 'react';
import { Link } from 'react-router'
import pact from 'pug-react-compiler';

import template from './Index.pug';
// import './Index.css';

class Index extends Component {
  render() {
    return pact.compile(template, {
    	siteTitle: "Ienze",
    	Link
    });
  }
}

export default Index;
