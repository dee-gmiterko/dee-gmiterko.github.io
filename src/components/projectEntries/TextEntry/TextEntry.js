import React, { Component } from 'react';
import Namp from 'namp';
import Template from './TextEntry.pug.js';

export class TextEntry extends Component {
  render() {

  	var entry = {
  		type: 'text',
  		text: Namp(this.props.entry.text).html
  	}

    return <Template entry={entry} />
  }
}

export default TextEntry;