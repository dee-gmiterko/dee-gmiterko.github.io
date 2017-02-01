import { Component } from 'react';
import pact from 'pug-react-compiler';

import template from './Project.pug';
// import './Project.css';

class Project extends Component {
  render() {
    return pact.compile(template);
  }
}

export default Project;
