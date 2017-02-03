/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'image' }, React.DOM.div({
            'style': 'background-image: url(' + this.props.project.image.url + ')',
            className: 'img-container'
        }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'to-bottom' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, this.props.project.title)))))), React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.p(null, this.props.project.text)))));
    }
};