/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __class from 'pug-react-compiler/runtimes/class.js';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'file-entry' }, React.DOM.a({ 'href': this.props.entry.path }, React.DOM.div({ className: 'file-icon' + ' ' + __class(this.props.entry.icon || 'default') }), React.DOM.p(null, this.props.translator('Download file'))));
    }
};