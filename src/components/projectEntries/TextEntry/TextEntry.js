import React, { Component } from 'react';
import Template from './TextEntry.pug.js';

export class TextEntry extends Component {
  render() {
    return <Template entry={this.props.entry} />
  }
}

export default TextEntry;