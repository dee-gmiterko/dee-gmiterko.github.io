/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.h2({ className: 'text-center' }, this.props.translator('Project not found')))));
    }
};