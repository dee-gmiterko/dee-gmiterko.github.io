/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */
import React from 'react';
import __class from 'pug-react-compiler/runtimes/class.js';
import {Link} from 'react-router';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.li({ className: __class('category ' + this.props.project.tags[0]) }, React.createElement(Link, {
            'to': '/project/' + this.props.project.slug,
            'style': { 'backgroundImage': 'url(' + this.props.project.image + ')' },
            className: 'galleryItem'
        }, React.DOM.img({ 'src': this.props.project.image })), React.DOM.div({ className: 'this' + ' ' + 'props' + ' ' + 'project-meta' }, React.DOM.div({ className: 'meta' }, React.DOM.h2(null, this.props.project.title), React.DOM.p(null, this.props.project.description))));
    }
};