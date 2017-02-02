module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div(null, React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'image' }, React.DOM.div({
            'style': 'background-image: url(' + project.image.url + ')',
            className: 'img-container'
        }, React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'to-bottom' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, project.title)))))), React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, React.DOM.p(null, project.text), React.DOM.p({ className: 'project-meta' + ' ' + 'text-center' }, (project.started_at ? formatDate(project.started_at) : '?') + __(' to ') + (project.finished_at ? formatDate(project.finished_at) : '?'))))));
    }
};