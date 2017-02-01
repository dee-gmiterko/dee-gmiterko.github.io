import { Component } from 'react';
import pact from 'pug-react-compiler';

import template from './Portfolio.pug';
// import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return pact.compile(template);
  }
}

export default Portfolio;
