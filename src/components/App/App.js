import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ReactGA from 'react-ga';

import Layout from './../Layout/Layout';
import Index from './../Index/Index';
import About from './../About/About';
import Portfolio from './../Portfolio/Portfolio';
import Project from './../Project/Project';
import NotFound from './../NotFound/NotFound';

import Locales from './../../services/Locales';
import Projects from './../../services/Projects';

export class App extends Component {

	constructor() {
		super();
		this.locales = new Locales(this, {
		  'sk': 'locale/sk.json',
		  'en': 'locale/en.json'
		});
		this.projects = new Projects(this, {
		  'sk': 'projects/sk.json',
		  'en': 'projects/en.json'
		});

		this.state = {
			'locale': undefined,
			'locales': {},
			'projects': {}
		};
	}

	componentDidMount() {
		this.changeLocale(this.locales.findBestLocale());
	}

	changeLocale(locale) {
		this.locales.ensureLocale(locale);
		this.projects.ensureLocale(locale);
		this.setState({
			'locale': locale
		});
	}

	logPageView() {
		ReactGA.set({ page: window.location.hash });
		ReactGA.pageview( window.location.hash );
	}

	render() {
		var translator = this.locales.getTranslator();

		return  <Router history={hashHistory} onUpdate={this.logPageView}>
					<Route path="/" component={Layout} translator={translator} changeLocale={this.changeLocale.bind(this)} >
						<IndexRoute component={Index} translator={translator} projectsService={this.projects} />
						<Route path="about" component={About} translator={translator} />
						<Route path="portfolio" component={Portfolio} translator={translator} projectsService={this.projects} />
						<Route path="portfolio/:tag" component={Portfolio} translator={translator} projectsService={this.projects} />
						<Route path="project/:project" component={Project} translator={translator} projectsService={this.projects} />
						<Route path="*" component={NotFound} translator={translator} />
					</Route>
				</Router>
	}
}

export default App;