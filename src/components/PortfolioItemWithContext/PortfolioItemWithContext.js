import React, { Component } from 'react';

import Template from './PortfolioItemWithContext.pug.js';

export class PortfolioItemWithContext extends Component {
	render() {
		return <Template translator={this.props.translator} project={this.props.item} />
	}
}

export default PortfolioItemWithContext;