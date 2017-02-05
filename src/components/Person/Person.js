import React, { Component } from 'react';
import Template from './Person.pug.js';

export class Person extends Component {
  render() {
    return <Template translator={this.props.translator} person={this.props.person} />
  }
}

export default Person;