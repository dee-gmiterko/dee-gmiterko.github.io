import React from 'react';
var Person = require('../components/Person/Person')
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.div({ className: 'blog-profile' + ' ' + 'small' }, React.DOM.img({
            'src': this.props.siteSettings.profileImage,
            className: 'enlarge'
        })), React.DOM.h1({ className: 'hide' }, this.props.locale('About me')), React.DOM.h2(null, React.DOM.a({ 'href': '/about' }, 'Dominik Gmiterko')), React.DOM.p(null, React.DOM.a({ 'href': '/portfolio/programming' }, 'Coder&nbsp;&nbsp;'), React.DOM.a({ 'href': '/portfolio/art' }, 'Artist&nbsp;&nbsp;'), React.DOM.a({ 'href': '/blog' }, 'Me'))))), React.DOM.div({ 'id': 'about-columns' }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.locale('ABOUT_1').replace(/\%/g, this.props.siteAuthorYears))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.locale('ABOUT_2').replace(/\%/g, this.props.siteAuthorYears - 10))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, this.props.locale('ABOUT_3'))))), React.DOM.div({
            'id': 'about-contact',
            className: 'row'
        }, React.DOM.div({ className: 'small-12' + ' ' + 'medium-6' + ' ' + 'medium-centered' + ' ' + 'columns' }, React.DOM.h3(null, this.props.locale('Contact')), React.createElement(Person, null, 'locale={this.} person={this.props.me}'))), React.DOM.div({ 'id': 'about-pointless-image' }, React.DOM.div({ className: 'row' }, React.DOM.img({
            'src': '/images/me.png',
            'alt': this.props.locale('Just') + ' ' + this.props.siteSettings.siteTitle
        }, ' '))));
    }
};