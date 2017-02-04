import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App';
import Index from './Index/Index';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Project from './Project/Project';
import NotFound from './NotFound/NotFound';

import Locale from './services/Locale';
import Projects from './services/Projects';

var locale = new Locale({
  'sk': require('./../data/locale/sk.json'),
  'en': require('./../data/locale/en.json')
}, 'sk');
var translator = locale.getTranslator();

var projectsService = new Projects({
  'sk': require('./../data/projects/sk.json'),
  'en': require('./../data/projects/en.json')
}, locale);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={() => <Index locale={translator} projectsService={projectsService} />} />
      <Route path="about" component={() => <About locale={translator} />}/>
      <Route path="portfolio/:tag" component={() => <Portfolio locale={translator} projectsService={projectsService} />}/>
      <Route path="project/:project" component={() => <Project locale={translator} projectsService={projectsService} />}/>
      <Route path="*" component={() => <NotFound locale={translator} />}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
