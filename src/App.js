import React, { Component } from 'react';

import Template from './App.pug.js';

import './style/app.css';

class App extends Component {
	render() {
		return <Template locale={this.props.route.locale} children={this.props.children} />
	}
}

export default App;
