/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import {Link} from 'react-router';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.h2(null, this.props.translator('Not found')), React.DOM.ul(null, React.DOM.li(null, React.createElement(Link, { 'to': '/' }, 'Return to index')), React.DOM.li(null, React.createElement(Link, { 'to': '/about' }, 'Read about me')), React.DOM.li(null, React.createElement(Link, { 'to': '/portfolio' }, 'Browse portfolio'))), React.DOM.img({ 'src': require('../../images/error.png') }));
    }
};