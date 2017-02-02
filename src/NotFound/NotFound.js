import { Component } from 'react';

import template from './NotFound.pug.js';
// import './NotFound.css';

class NotFound extends Component {
  render() {
    return template({
    	message: "None",
    	error: "None"
    });
  }
}

export default NotFound;
