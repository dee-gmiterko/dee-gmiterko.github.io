import { Component } from 'react';
import pact from 'pug-react-compiler';

import template from './About.pug';
// import './About.css';

class About extends Component {
  render() {
    return pact.compile(template);
  }
}

export default About;
