/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'page' }, React.DOM.a({
            'href': '#content',
            className: 'hide'
        }, 'Skip to content'), React.DOM.div({ 'id': 'menu' }, React.createElement(Menu, { 'translator': this.props.translator })), React.DOM.div({
            'id': 'content',
            className: 'menu-open-container'
        }, React.DOM.a({
            'id': 'menu-open',
            'target': '#menu',
            className: 'text-center' + ' ' + 'slowScrollTo'
        }, React.DOM.span(null, this.props.translator('Menu')))), React.DOM.div(null, this.props.children), React.DOM.div({ 'id': 'footer-space' }), React.DOM.div({ 'id': 'footer' }, React.createElement(Footer, {
            'translator': this.props.translator,
            'changeLocale': this.props.changeLocale
        })));
    }
};