import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import './App.css';

import Index from './Index/Index';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Project from './Project/Project';
import NotFound from './NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}>
          <Route path="about" component={About}/>
          <Route path="portfolio/:tag" component={Portfolio}/>
          <Route path="project/:project" component={Project}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    );
  }
}

export default App;
