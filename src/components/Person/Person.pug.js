/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({
            'itemScope': true,
            'itemType': 'http://schema.org/Person',
            className: 'profile'
        }, React.DOM.p({ className: 'name' }, React.DOM.strong({ 'itemProp': 'name' }, this.props.person.name)), React.DOM.p({ className: 'job' }, React.DOM.span({ 'itemProp': 'jobTitle' }, 'Coder, Artist, Me')), React.DOM.img({
            'src': require('../../images/profile_16.png'),
            'itemProp': 'image',
            'alt': 'Photo of ' + this.props.person.name,
            className: 'hide'
        }), React.DOM.ul({ className: 'no-bullet' }, React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'website' }), React.DOM.a({
            'href': this.props.person.website,
            'itemProp': 'url'
        }, 'Website: ' + this.props.person.website)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'email' }), React.DOM.a({
            'href': 'mailto:' + this.props.person.email,
            'itemProp': 'email'
        }, 'Email: ' + this.props.person.email)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'github' }), React.DOM.a({
            'href': '//github.com/' + this.props.person.github,
            'target': '_blank'
        }, 'Github: ' + this.props.person.github)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitter' }), React.DOM.a({
            'href': '//twitter.com/' + this.props.person.twitter,
            'target': '_blank'
        }, 'Twitter: ' + this.props.person.twitter)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitch' }), React.DOM.a({
            'href': '//twitch.tv/' + this.props.person.twitch,
            'target': '_blank'
        }, 'Twitch: ' + this.props.person.twitch)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'skype' }), React.DOM.a({ 'href': 'skype:' + this.props.person.skype }, 'Skype: ' + this.props.person.skype))), React.DOM.p({
            'itemProp': 'description',
            className: 'about-me'
        }, this.props.translator('ABOUT_ME')));
    }
};