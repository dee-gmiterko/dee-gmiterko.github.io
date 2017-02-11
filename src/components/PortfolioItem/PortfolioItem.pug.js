/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __class from 'pug-react-compiler/runtimes/class.js';
import {Link} from 'react-router';
import {slowScrollTo} from '../../javascript/utils';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.li({ className: __class('category ' + this.props.project.tags[0]) }, React.createElement(Link, {
            'to': '/project/' + this.props.project.slug,
            'style': { 'backgroundImage': 'url(' + (this.props.project.image || require('../../images/noimage.png')) + ')' },
            className: 'galleryItem'
        }, React.DOM.img({ 'src': this.props.project.image })), React.DOM.div({ className: 'this' + ' ' + 'props' + ' ' + 'project-meta' + ' ' + __class(!this.props.project.image ? 'noimage' : '') }, React.DOM.div({ className: 'meta' }, React.DOM.h2(null, this.props.project.title), React.DOM.p(null, this.props.project.description))));
    }
};