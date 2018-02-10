/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import {Link} from 'react-router';
import Gallery16 from './../Gallery16/Gallery16';
import PortfolioItem from './../PortfolioItem/PortfolioItem';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'portfolio-description' }, React.DOM.h1(null, this.props.translator(this.props.siteSettings.siteTitle) + ' : ' + this.props.translator('Portfolio'))), React.createElement(Gallery16, {
            'itemType': PortfolioItem,
            'items': this.props.projectsFeatured
        }), this.props.projectsFeatured.length > 0 && this.props.projectsNonfeatured.length > 0 ? React.DOM.div({
            'id': 'portfolio-more-projects',
            className: 'row'
        }, React.DOM.div({ className: 'column' + ' ' + 'small-3' }, React.DOM.div({ className: 'blog-profile' + ' ' + 'tiny' + ' ' + 'right' }, React.DOM.img({ 'src': require('../../images/' + this.props.siteSettings.profileImage) }))), React.DOM.div({ className: 'column' + ' ' + 'small-9' }, [
            'art',
            'game',
            'unity',
            'programming',
            'websites',
            'blog'
        ].includes(this.props.tag) ? React.DOM.div(null, this.props.tag === 'art' ? React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'More art'), React.DOM.p(null, 'My DeviantArt account contains more traditional and digital art.'), React.DOM.a({
            'href': 'https://' + this.props.siteSettings.me.deviantart + '.deviantart.com',
            className: 'button' + ' ' + 'large'
        }, 'Visit DeviantArt')) : null, this.props.tag === 'game' || this.props.tag === 'unity' ? React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'More games'), React.DOM.p(null, 'You can head to my Itch.io account to find more little indie game experiments.'), React.DOM.a({
            'href': 'https://' + this.props.siteSettings.me.itch + '.itch.io',
            className: 'button' + ' ' + 'large'
        }, 'Visit Itch.io')) : null, this.props.tag === 'programming' ? React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'More code'), React.DOM.p(null, 'If you want to have a better look at my code you should look at some of my many repositories at GitHub.'), React.DOM.a({
            'href': 'https://github.com/' + this.props.siteSettings.me.github,
            className: 'button' + ' ' + 'large'
        }, 'Visit GitHub')) : null, this.props.tag === 'websites' ? React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'More websites'), React.DOM.p(null, 'There isn\'t place where you can find more my websites. But I\'m thinking about making one.'), React.DOM.button({ className: 'button' + ' ' + 'large' }, 'Stay here')) : null, this.props.tag === 'blog' ? React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'More articles'), React.DOM.p(null, 'If you are interested in more articles like this follow me on Tumblr or Patreon'), React.DOM.a({
            'href': 'https://www.tumblr.com/blog/' + this.props.siteSettings.me.tumblr,
            className: 'button' + ' ' + 'large'
        }, 'Visit Tumblr'), React.DOM.a({
            'href': 'https://patreon.com/' + this.props.siteSettings.me.patreon,
            className: 'button' + ' ' + 'large'
        }, 'Visit Patreon')) : null) : React.DOM.div({ className: 'special-offer' }, React.DOM.h4(null, 'Dominik Gmiterko'), React.DOM.p(null, 'Coder, Artist, Me (/^\u25BD^)/'), React.DOM.p(null, 'If you are interested in more than my projects you can also visit this links.'), React.createElement(Link, {
            'to': '/about',
            className: 'button large'
        }, 'About & Contact'), React.DOM.a({
            'href': 'https://twitter.com/' + this.props.siteSettings.me.twitter,
            className: 'button' + ' ' + 'large'
        }, 'Visit Twitter'), React.DOM.a({
            'href': 'https://' + this.props.siteSettings.me.deviantart + '.deviantart.com',
            className: 'button' + ' ' + 'large'
        }, 'Visit DeviantArt')))) : null, React.createElement(Gallery16, {
            'itemType': PortfolioItem,
            'items': this.props.projectsNonfeatured
        }), React.DOM.div({ 'id': 'fnav' }, React.DOM.div({ className: 'row' + ' ' + 'text-center' }, this.props.tag ? React.createElement(Link, {
            'to': '/portfolio',
            className: 'button large'
        }, this.props.translator('More projects')) : null, React.createElement(Link, {
            'to': '/about',
            className: 'button large'
        }, this.props.translator('Contact')))));
    }
};