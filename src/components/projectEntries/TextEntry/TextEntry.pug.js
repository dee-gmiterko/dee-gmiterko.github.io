/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.p({ 'dangerouslySetInnerHTML': { '__html': this.props.entry.text } });
    }
};