/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'footer-content-small' }, React.DOM.div({ className: 'row' }, React.DOM.span({ className: 'icon' + ' ' + 'email' }, 'Email'), React.DOM.a({ 'href': 'mailto:' + this.props.siteSettings.me.email }, this.props.siteSettings.me.email))), React.DOM.div({ className: 'footer-content-large' }, React.DOM.div({ className: 'expand' }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'small-12' + ' ' + 'medium-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.ul({ className: 'language-change' + ' ' + 'no-bullet' }, React.DOM.li(null, this.props.translator('Change language')), React.DOM.li(null, React.DOM.a({
            'onClick': () => {
                (props.changeLocale('sk'))
            },
            className: 'sk'
        }, 'SK'), ' ', React.DOM.a({
            'onClick': () => {
                (props.changeLocale('en'))
            },
            className: 'en'
        }, 'EN')))), React.DOM.div({ className: 'small-12' + ' ' + 'medium-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.ul({ className: 'no-bullet' }, React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'email' }), React.DOM.a({
            'href': 'mailto:' + this.props.siteSettings.me.email,
            'itemProp': 'email'
        }, this.props.siteSettings.me.email)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitter' }), React.DOM.a({
            'href': '//twitter.com/' + this.props.siteSettings.me.twitter,
            'target': '_blank'
        }, this.props.siteSettings.me.twitter)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'github' }), React.DOM.a({
            'href': '//github.com/' + this.props.siteSettings.me.github,
            'target': '_blank'
        }, this.props.siteSettings.me.github)), React.DOM.li(null, React.DOM.span({ className: 'icon' + ' ' + 'twitch' }), React.DOM.a({
            'href': '//twitch.tv/' + this.props.siteSettings.me.twitch,
            'target': '_blank'
        }, this.props.siteSettings.me.twitch)))), React.DOM.div({ className: 'small-12' + ' ' + 'medium-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.ul({ className: 'no-bullet' }, React.DOM.li(null, 'Made in'), React.DOM.li(null, 'Slovakia - somewhere on Earth'))))), React.DOM.div({ className: 'base' }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'medium-4' + ' ' + 'columns' }, this.props.translator('Change language')), React.DOM.div({ className: 'medium-4' + ' ' + 'columns' }, React.DOM.span({ className: 'icon' + ' ' + 'email' }, 'Email'), React.DOM.a({ 'href': 'mailto:' + this.props.siteSettings.me.email }, this.props.siteSettings.me.email)), React.DOM.div({ className: 'medium-4' + ' ' + 'columns' }, React.DOM.span(null, 'Dominik Gmiterko | '), React.DOM.a({ 'href': '//creativecommons.org/licenses/by/4.0/deed.cs' }, 'CC BY 4.0')))));
    }
};