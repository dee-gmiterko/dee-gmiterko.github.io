/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import {Link} from 'react-router';
import Gallery16 from './../Gallery16/Gallery16';
import PortfolioItem from './../PortfolioItem/PortfolioItem';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, React.DOM.span(null, this.props.siteSettings.siteTitle)), React.DOM.h2(null, React.createElement(Link, {
            'to': '/about',
            'target': '#content',
            className: 'slowScrollTo'
        }, 'Dominik Gmiterko')), React.DOM.p(null, React.createElement(Link, {
            'to': '/portfolio/programming',
            'target': '#content',
            className: 'slowScrollTo'
        }, 'Coder  '), React.createElement(Link, {
            'to': '/portfolio/art',
            'target': '#content',
            className: 'slowScrollTo'
        }, 'Artist  '), React.createElement(Link, {
            'to': '/about',
            'target': '#content',
            className: 'slowScrollTo'
        }, 'Me')))), React.createElement(Gallery16, {
            'itemType': PortfolioItem,
            'items': this.props.projects
        })), React.DOM.div({ 'id': 'fnav' }, React.DOM.div({ className: 'row' + ' ' + 'text-center' }, React.createElement(Link, {
            'to': '/portfolio',
            'target': '#content',
            className: 'button large slowScrollTo'
        }, this.props.translator('More projects')))));
    }
};