import React, { Component } from 'react';
import { Link } from 'react-router';

import Template from './NotFound.pug.js';
// import './NotFound.css';

class NotFound extends Component {
  render() {
    return <Template Link={Link} />
  }
}

export default NotFound;
