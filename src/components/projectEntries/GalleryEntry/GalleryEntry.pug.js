/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __map from 'pug-react-compiler/runtimes/map.js';
import Entry from './../Entry/Entry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.ul({ className: 'small-block-grid-2' + ' ' + 'medium-block-grid-3' + ' ' + 'large-block-grid-5' }, __map(this.props.entry.entries, (entry, $index) => {
            return React.DOM.li({
                'key': $index,
                className: 'entry'
            }, React.createElement(Entry, {
                'translator': this.props.translator,
                'entry': entry
            }));
        }));
    }
};