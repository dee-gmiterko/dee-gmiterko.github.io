import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, React.DOM.span(null, this.props.siteSettings.siteTitle)), React.DOM.h2(null, React.DOM.a({ 'href': '/about' }, 'Dominik Gmiterko')), React.DOM.p(null, React.DOM.a({ 'href': '/portfolio/programming' }, 'Coder&nbsp;&nbsp;'), React.DOM.a({ 'href': '/portfolio/art' }, 'Artist&nbsp;&nbsp;'), React.DOM.a({ 'href': '/blog' }, 'Me'))))));
    }
};