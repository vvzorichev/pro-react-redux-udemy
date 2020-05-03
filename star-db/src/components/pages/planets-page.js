import React, { Component } from 'react'

import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetsPage extends Component {

	state = {
		selectedItem: 1
	};

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem });
	};

	render() {
		return (
			<Row
				left={<PlanetList onItemSelected={this.onItemSelected}/>}
				right={<PlanetDetails itemId={this.state.selectedItem} />} />
		)
	};
};