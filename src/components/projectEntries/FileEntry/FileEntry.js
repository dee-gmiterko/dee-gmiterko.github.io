import React, { Component } from 'react';
import Template from './FileEntry.pug.js';

export class FileEntry extends Component {
  render() {
    return <Template translator={this.props.translator} entry={this.props.entry} />
  }
}

export default FileEntry;