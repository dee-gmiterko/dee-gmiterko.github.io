import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './Layout';
import Index from './Index/Index';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Project from './Project/Project';
import NotFound from './NotFound/NotFound';

import Locales from './services/Locales';
import Projects from './services/Projects';

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
		


		window.state = this.state;



		
	}

	componentDidMount() {
		this.changeLocale('sk');
	}

	changeLocale(locale) {
		this.locales.ensureLocale(locale);
		this.projects.ensureLocale(locale);
		this.setState({
			locale: locale
		})
	}

	render() {
		var translator = this.locales.getTranslator();

		return  <Router history={hashHistory}>
					<Route path="/" component={Layout} locale={translator} >
						<IndexRoute component={Index} locale={translator} projectsService={this.projects} />
						<Route path="about" component={About} locale={translator} />
						<Route path="portfolio" component={Portfolio} locale={translator} projectsService={this.projects} />
						<Route path="portfolio/:tag" component={Portfolio} locale={translator} projectsService={this.projects} />
						<Route path="project/:project" component={Project} locale={translator} projectsService={this.projects} />
						<Route path="*" component={NotFound} locale={translator} />
					</Route>
				</Router>
	}
}

export default App;