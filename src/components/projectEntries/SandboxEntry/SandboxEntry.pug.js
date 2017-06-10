/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'sandbox-entry' }, React.DOM.iframe({
            'src': this.props.entry.path,
            'width': this.props.entry.width,
            'height': this.props.entry.height,
            'sandbox': 'allow-scripts allow-same-origin'
        }));
    }
};