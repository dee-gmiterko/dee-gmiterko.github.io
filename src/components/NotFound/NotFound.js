import React, { Component } from 'react';
import Template from './NotFound.pug.js';

class NotFound extends Component {
	
	render() {
		return <Template translator={this.props.route.translator} />
	}

	componentDidMount(e) {
		window.myAttachScript();
	}
	componentDidUpdate(e) {
		window.myDetachScript();
		window.myAttachScript();
	}
	componentWillUnmount(e) {
		window.myDetachScript();
	}
}

export default NotFound;
