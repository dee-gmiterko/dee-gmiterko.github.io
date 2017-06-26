/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import {slowScrollTo} from '../../javascript/utils';
import Menu from './../Menu/Menu';
import Footer from './../Footer/Footer';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'page' }, React.DOM.div({ 'id': 'menu' }, React.createElement(Menu, { 'translator': this.props.translator })), React.DOM.div({
            'id': 'top',
            className: 'menu-open-container'
        }, React.DOM.a({
            'id': 'menu-open',
            'onClick': slowScrollTo('#menu'),
            className: 'text-center'
        }, React.DOM.span(null, this.props.translator('Menu')))), this.props.loading ? React.DOM.div({ 'id': 'content' }, React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.h2({ className: 'text-center' }, this.props.translator('Loading')))))) : React.DOM.div({ 'id': 'content' }, this.props.children), React.DOM.div({ 'id': 'footer-space' }), React.DOM.div({ 'id': 'footer' }, React.createElement(Footer, {
            'translator': this.props.translator,
            'changeLocale': this.props.changeLocale
        })));
    }
};