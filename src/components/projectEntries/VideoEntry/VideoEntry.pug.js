/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'video-entry' + ' ' + 'flex-video' + ' ' + 'widescreen' }, React.DOM.video({
            'src': this.props.entry.path,
            'controls': 'controls'
        }));
    }
};