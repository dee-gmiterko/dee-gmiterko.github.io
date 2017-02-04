import React, { Component } from 'react';
import Template from './NotFound.pug.js';

class NotFound extends Component {
  render() {
    return <Template locale={this.props.route.locale} />
  }
}

export default NotFound;
