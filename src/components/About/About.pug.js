/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import Person from '../Person/Person';
import {Link} from 'react-router';
import {slowScrollTo} from '../../javascript/utils';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.div({ className: 'blog-profile' + ' ' + 'small' }, React.DOM.img({
            'src': require('../../images/profile_16.png'),
            className: 'enlarge'
        })), React.DOM.h1({ className: 'hide' }, this.props.translator('About me')), React.DOM.h2(null, React.createElement(Link, { 'to': '/about' }, this.props.siteSettings.me.name)), React.DOM.p(null, React.createElement(Link, { 'to': '/portfolio/programming' }, 'Coder'), React.createElement(Link, { 'to': '/portfolio/art' }, 'Artist'), React.createElement(Link, { 'to': '/about' }, 'Me'))))), React.DOM.div({ 'id': 'about-columns' }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.translator('ABOUT_1').replace(/\%/g, this.props.siteAuthorYears))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.translator('ABOUT_2').replace(/\%/g, this.props.siteAuthorYears - 10))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.translator('ABOUT_3'))))), React.DOM.div({
            'id': 'about-contact',
            className: 'row'
        }, React.DOM.div({ className: 'small-12' + ' ' + 'medium-6' + ' ' + 'medium-centered' + ' ' + 'columns' }, React.DOM.h3(null, this.props.translator('Contact')), React.createElement(Person, {
            'translator': this.props.translator,
            'person': this.props.siteSettings.me
        }))), React.DOM.div({ 'id': 'about-pointless-image' }, React.DOM.div({ className: 'row' }, React.DOM.img({
            'src': require('../../images/me.png'),
            'alt': this.props.translator('Just') + ' ' + this.props.siteSettings.siteTitle
        }))));
    }
};