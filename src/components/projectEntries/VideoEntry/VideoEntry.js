import React, { Component } from 'react';
import Template from './VideoEntry.pug.js';

export class VideoEntry extends Component {
  render() {
    return <Template translator={this.props.translator} entry={this.props.entry} />
  }
}

export default VideoEntry;