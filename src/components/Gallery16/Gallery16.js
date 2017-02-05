import React, { Component } from 'react';
import Seedrandom from 'seedrandom';

import Template from './Gallery16.pug.js';

export class Gallery16 extends Component {

	render() {

		var splitItems = function (items, random) {
			var itemsOut = [];

			var p = 0;
			var b = 0;
			while (p < items.length) {
				var r = 1 + Math.floor(random() * 4);
				if (r === 3)
					r = 4;

				itemsOut[b] = {
					sigil: Math.round(random()),
					items: items.slice(p, p + r)
				};

				p += r;
				b++;
			}

			return itemsOut;
		};

		var random = new Seedrandom(""+Math.floor(new Date().getTime() / 3600000));

		var items = splitItems(this.props.items, random);

		return <Template translator={this.props.translator} items={items} itemType={this.props.itemType} />
	}
}

export default Gallery16;