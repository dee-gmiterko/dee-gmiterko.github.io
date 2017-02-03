/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */
import React from 'react';
import {ReactRouter} from 'react-router';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        const Link = ReactRouter.Link;
        return React.DOM.div(null, React.DOM.h2(null, this.props.message), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, { 'to': '/' }, 'Return to index')), React.DOM.li(null, React.createElement(Link, { 'to': '/about' }, 'Read about me')), React.DOM.li(null, React.createElement(Link, { 'to': '/portfolio' }, 'Browse portfolio'))), React.DOM.img({
            'src': '/images/error.png',
            'style': 'position: fixed; bottom: 0; right: 32px; max-height: 100%'
        }));
    }
};