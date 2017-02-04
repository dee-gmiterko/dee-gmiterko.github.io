import React, { Component } from 'react';
import Template from './Person.pug.js';

export class Person extends Component {
  render() {
    return <Template locale={this.props.locale} person={this.props.person} />
  }
}

export default Person;