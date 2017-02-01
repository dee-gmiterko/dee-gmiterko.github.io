import { Component } from 'react';
import pact from 'pug-react-compiler';

import template from './NotFound.pug';
// import './NotFound.css';

class NotFound extends Component {
  render() {
    return pact.compile(template);
  }
}

export default NotFound;
