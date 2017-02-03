import React, { Component } from 'react';

import Template from './Person.pug.js';
// import './Index.css';

export class Person extends Component {
  render() {
    return <Template locale={this.props.locale} person={this.props.person} />
  }
}

export default Person;