import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'portfolio-description' }, React.DOM.h1(null, this.props.locale(this.props.siteSettings.siteTitle) + ' : ' + this.props.locale('Portfolio'))));
    }
};