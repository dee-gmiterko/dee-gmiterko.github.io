/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __map from 'pug-react-compiler/runtimes/map.js';
import {Link} from 'react-router';
import ReactDisqusThread from 'react-disqus-thread';
import {slowScrollTo} from '../../javascript/utils';
import Entry from './../projectEntries/Entry/Entry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'image' }, React.DOM.div({
            'style': { backgroundImage: 'url(' + (this.props.project.image ? this.props.project.image : require('../../images/noimage.png')) + ')' },
            className: 'img-container'
        }), React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'to-bottom' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, this.props.project.title))))), React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, __map(this.props.project.entries, (entry, $index) => {
            return React.DOM.div({
                'key': $index,
                className: 'entry'
            }, React.createElement(Entry, {
                'translator': this.props.translator,
                'entry': entry
            }));
        }), React.DOM.p({ className: 'project-meta' + ' ' + 'text-center' }, (this.props.project.startedAt ? this.props.formatDate(this.props.project.startedAt) : '?') + this.props.translator(' to ') + (this.props.project.finishedAt ? this.props.formatDate(this.props.project.finishedAt) : '?')), React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'project-navigation' }, React.createElement(Link, {
            'to': 'project/' + this.props.project.predecessor.slug,
            className: 'button tiny left'
        }, this.props.translator('Previous project')), React.createElement(Link, {
            'to': 'project/' + this.props.project.successor.slug,
            className: 'button tiny right'
        }, this.props.translator('Next project')))))), React.DOM.div({ className: 'disqus' }, React.DOM.div({ className: 'row' }, React.DOM.h3(null, 'Enjoy comments!'), React.createElement(ReactDisqusThread, {
            'shortname': 'ienze',
            'identifier': this.props.project.slug,
            'title': this.props.project.title,
            'url': 'http://ienze.me/#/project/' + this.props.project.slug
        }))), React.DOM.div({ 'id': 'fnav' }, React.DOM.div({ className: 'row' + ' ' + 'text-center' }, React.createElement(Link, {
            'to': '/portfolio',
            className: 'button large'
        }, this.props.translator('More projects')), React.createElement(Link, {
            'to': '/about',
            className: 'button large'
        }, this.props.translator('Contact')))));
    }
};