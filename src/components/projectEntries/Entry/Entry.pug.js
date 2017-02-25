/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import TextEntry from './../TextEntry/TextEntry';
import ImageEntry from './../ImageEntry/ImageEntry';
import FileEntry from './../FileEntry/FileEntry';
import VideoEntry from './../VideoEntry/VideoEntry';
import GalleryEntry from './../GalleryEntry/GalleryEntry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, entry.type === 'image' ? React.createElement(ImageEntry, {
            'translator': this.props.translator,
            'entry': entry
        }) : null, entry.type === 'text' ? React.createElement(TextEntry, {
            'translator': this.props.translator,
            'entry': entry
        }) : null, entry.type === 'file' ? React.createElement(FileEntry, {
            'translator': this.props.translator,
            'entry': entry
        }) : null, entry.type === 'video' ? React.createElement(VideoEntry, {
            'translator': this.props.translator,
            'entry': entry
        }) : null, entry.type === 'gallery' ? React.createElement(GalleryEntry, {
            'translator': this.props.translator,
            'entry': entry
        }) : null);
    }
};