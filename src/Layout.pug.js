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
        }, 'Skip to content'), React.DOM.div({ 'id': 'menu' }, React.createElement(Menu, { 'locale': this.props.locale })), React.DOM.div({
            'id': 'top',
            className: 'menu-open-container'
        }, React.DOM.a({
            'id': 'menu-open',
            'href': '#menu',
            className: 'text-center'
        }, React.DOM.span(null, this.props.locale('Menu')))), React.DOM.div({ className: 'content' }, this.props.children), React.DOM.div({ 'id': 'footer-space' }), React.DOM.div({ 'id': 'footer' }, React.createElement(Footer, { 'locale': this.props.locale })));
    }
};