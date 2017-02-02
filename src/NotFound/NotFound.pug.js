module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.h1(null, message), React.DOM.pre(null, message), error ? (React.DOM.h2(null, error.status), React.DOM.pre(null, error.stack)) : null, React.DOM.ul(null, React.DOM.li(null, React.DOM.a({ 'href': '/' }, 'Return to index')), React.DOM.li(null, React.DOM.a({ 'href': '/blog' }, 'Read blog')), React.DOM.li(null, React.DOM.a({ 'href': '/portfolio' }, 'Browse portfolio'))), React.DOM.img({
            'src': '/images/error.png',
            'style': 'position: fixed; bottom: 0; right: 32px; max-height: 100%'
        }));
    }
};