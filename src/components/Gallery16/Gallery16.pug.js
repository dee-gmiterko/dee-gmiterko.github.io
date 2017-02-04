/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape */
import React from 'react';
import __map from 'pug-react-compiler/runtimes/map.js';
import __class from 'pug-react-compiler/runtimes/class.js';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        const ItemType = this.props.itemType;
        return React.DOM.ul({ className: 'gallery16' }, __map(this.props.items, (block, $index) => {
            return React.DOM.div({
                'key': $index,
                className: __class('block g' + block.items.length + ' s' + block.sigil)
            }, __map(block.items, (item, $index) => {
                return React.createElement(ItemType, {
                    'key': $index,
                    'locale': this.props.locale,
                    'item': item
                });
            }));
        }));
    }
};