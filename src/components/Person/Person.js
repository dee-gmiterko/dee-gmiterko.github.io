import React, { Component } from 'react';
import Template from './Person.pug.js';
import siteSettings from './../../../config/site.json';

export class Person extends Component {
  render() {
    return <Template translator={this.props.translator} person={this.props.person} siteSettings={siteSettings} />
  }
}

export default Person;
