/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */
import React from 'react';
import {Person} from '../components/Person/Person';
import {ReactRouter} from 'react-router';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        const Link = ReactRouter.Link;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, React.DOM.span(null, this.props.siteSettings.siteTitle)), React.DOM.h2(null, React.createElement(Link, { 'to': '/about' }, 'Dominik Gmiterko')), React.DOM.p(null, React.createElement(Link, { 'to': '/portfolio/programming' }, 'Coder&nbsp;&nbsp;'), React.createElement(Link, { 'to': '/portfolio/art' }, 'Artist&nbsp;&nbsp;'), React.createElement(Link, { 'to': '/about' }, 'Me'))))));
    }
};