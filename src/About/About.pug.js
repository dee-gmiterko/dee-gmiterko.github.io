module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'title-screen' }, React.DOM.div({ className: 'row' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.div({ className: 'blog-profile' + ' ' + 'small' }, React.DOM.img({
            'src': blogProfileImage,
            className: 'enlarge'
        })), React.DOM.h1({ className: 'hide' }, __('About me')), React.DOM.h2(null, React.DOM.a({ 'href': '/about' }, 'Dominik Gmiterko')), React.DOM.p(null, React.DOM.a({ 'href': '/portfolio/programming' }, 'Coder&nbsp;&nbsp;'), React.DOM.a({ 'href': '/portfolio/art' }, 'Artist&nbsp;&nbsp;'), React.DOM.a({ 'href': '/blog' }, 'Me'))))), React.DOM.div({ 'id': 'about-columns' }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, __('ABOUT_1').replace(/\%/g, siteAuthorYears))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, __('ABOUT_2').replace(/\%/g, siteAuthorYears - 10))), React.DOM.div({ className: 'small-12' + ' ' + 'large-4' + ' ' + 'columns' + ' ' + 'corners' }, React.DOM.p(null, __('ABOUT_3'))))), React.DOM.div({
            'id': 'about-contact',
            className: 'row'
        }, React.DOM.div({ className: 'small-12' + ' ' + 'medium-6' + ' ' + 'medium-centered' + ' ' + 'columns' }, React.DOM.h3(null, __('Contact')), React.createElement(Person, null, 'me'))), React.DOM.div({ 'id': 'about-pointless-image' }, React.DOM.div({ className: 'row' }, React.DOM.img({
            'src': '/images/me.png',
            'alt': __('Just') + ' ' + siteTitle
        }, ' '))));
    }
};