/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __map from 'pug-react-compiler/runtimes/map.js';
import TextEntry from '../components/projectEntries/TextEntry/TextEntry';
import ImageEntry from '../components/projectEntries/ImageEntry/ImageEntry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'image' }, React.DOM.div({
            'style': { backgroundImage: 'url(' + this.props.project.image + ')' },
            className: 'img-container'
        }), React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'to-bottom' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, this.props.project.title))))), React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, __map(this.props.project.entries, (entry, $index) => {
            return entry.type === 'text' ? React.createElement(TextEntry, {
                'key': $index,
                'entry': entry
            }) : null, entry.type === 'image' ? React.createElement(ImageEntry, {
                'key': $index,
                'entry': entry
            }) : null;
        }))));
    }
};