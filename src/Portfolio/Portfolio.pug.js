module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.div({ 'id': 'portfolio-description' }, React.DOM.h1(null, __(siteTitle) + ' : ' + __('Portfolio')), React.DOM.p({ className: 'portfolio-content' }, __(portfolioContent))));
    }
};