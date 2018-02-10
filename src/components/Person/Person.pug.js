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
            'src': require('../../images/' + this.props.siteSettings.profileImage),
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
            'href': 'https://github.com/' + this.props.person.github,
            'target': '_blank'
        }, 'Github: ' + this.props.person.github)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitter' }), React.DOM.a({
            'href': 'https://twitter.com/' + this.props.person.twitter,
            'target': '_blank'
        }, 'Twitter: ' + this.props.person.twitter)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'linkedin' }), React.DOM.a({
            'href': 'https://www.linkedin.com/in/' + this.props.person.linkedin + '/',
            'target': '_blank'
        }, 'LinkedIn: ' + this.props.person.linkedin)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'facebook' }), React.DOM.a({
            'href': 'https://facebook.com/' + this.props.person.facebook,
            'target': '_blank'
        }, 'Facebook: ' + this.props.person.facebook)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitch' }), React.DOM.a({
            'href': 'https://twitch.tv/' + this.props.person.twitch,
            'target': '_blank'
        }, 'Twitch: ' + this.props.person.twitch)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'patreon' }), React.DOM.a({
            'href': 'https://patreon.com/' + this.props.person.patreon,
            'target': '_blank'
        }, 'Patreon: ' + this.props.person.patreon)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'itch' }), React.DOM.a({
            'href': 'https://' + this.props.person.itch + '.itch.io/',
            'target': '_blank'
        }, 'Itch.io: ' + this.props.person.itch)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'deviantart' }), React.DOM.a({
            'href': 'https://' + this.props.person.deviantart + '.deviantart.com/',
            'target': '_blank'
        }, 'Deviantart: ' + this.props.person.deviantart))), React.DOM.p({
            'itemProp': 'description',
            className: 'about-me'
        }, this.props.translator('ABOUT_ME')));
    }
};