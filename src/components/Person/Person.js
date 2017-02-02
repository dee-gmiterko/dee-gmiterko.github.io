import React, { Component } from 'react';
import { Link } from 'react-router'

import Template from './Person.pug.js';
// import './Index.css';

class Person extends Component {
  render() {
    return <Template locale={this.props.locale} person={this.props.person} />
  }
}

export default Person;
