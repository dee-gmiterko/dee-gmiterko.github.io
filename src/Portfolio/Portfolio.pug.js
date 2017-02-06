/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import Gallery16 from '../components/Gallery16/Gallery16';
import PortfolioItem from '../components/PortfolioItem/PortfolioItem';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'portfolio-description' }, React.DOM.h1(null, this.props.translator(this.props.siteSettings.siteTitle) + ' : ' + this.props.translator('Portfolio'))), React.createElement(Gallery16, {
            'itemType': PortfolioItem,
            'items': this.props.projects
        }));
    }
};