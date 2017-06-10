/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import TextEntry from './../TextEntry/TextEntry';
import ImageEntry from './../ImageEntry/ImageEntry';
import FileEntry from './../FileEntry/FileEntry';
import VideoEntry from './../VideoEntry/VideoEntry';
import GalleryEntry from './../GalleryEntry/GalleryEntry';
import SandboxEntry from './../SandboxEntry/SandboxEntry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, this.props.entry.type === 'image' ? React.createElement(ImageEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null, this.props.entry.type === 'text' ? React.createElement(TextEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null, this.props.entry.type === 'file' ? React.createElement(FileEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null, this.props.entry.type === 'video' ? React.createElement(VideoEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null, this.props.entry.type === 'gallery' ? React.createElement(GalleryEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null, this.props.entry.type === 'sandbox' ? React.createElement(SandboxEntry, {
            'translator': this.props.translator,
            'entry': this.props.entry
        }) : null);
    }
};