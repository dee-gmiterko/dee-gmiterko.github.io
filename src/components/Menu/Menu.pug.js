/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import {Link} from 'react-router';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'navigation-wrapper' }, React.DOM.div({ className: 'background' }, React.DOM.div(), React.DOM.span({ className: 'mask' }), React.DOM.div()), React.DOM.div({ className: 'breadcrumbs-wrapper' }, React.DOM.div({ className: 'row' }, React.DOM.ul({ className: 'breadcrumbs' }), React.DOM.div({ className: 'passiveSwitch' }, 'Simple menu'))), React.DOM.nav({ className: 'metroNavigation' + ' ' + 'passive' }, React.DOM.ul(null, React.DOM.li({ className: 'hide-connection' }, React.createElement(Link, {
            'to': '/',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator(this.props.siteSettings.siteTitle)), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, {
            'to': '/about',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('About'))), React.DOM.li(null, React.createElement(Link, {
            'to': '/portfolio',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('Portfolio')), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, {
            'to': '/portfolio/programming',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('Programming')), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, {
            'to': '/portfolio/websites',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('Websites'))))), React.DOM.li({ className: 'force-l-b' }, React.createElement(Link, {
            'to': '/portfolio/other',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('Other')), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, {
            'to': '/portfolio/art',
            'target': '#content',
            className: 'slowScrollTo'
        }, this.props.translator('Art')))))))))), React.DOM.div({ className: 'mover' })));
    }
};