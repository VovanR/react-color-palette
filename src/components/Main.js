require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderComponent from './HeaderComponent';
import PalettePanelComponent from './PalettePanelComponent';
import AddColorPanelComponent from './AddColorPanelComponent';
import EditColorPanelComponent from './EditColorPanelComponent';
import {union, uniqueId, findWhere, without} from 'lodash';

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			colors: [
				{ id: uniqueId('color'), code: '#ff0000', name: 'Red', selected: false },
				{ id: uniqueId('color'), code: '#00ff00', name: 'Green', selected: false },
				{ id: uniqueId('color'), code: '#0000ff', name: 'Blue', selected: false }
			]
		};
	}

	handleAddColor(color) {
		this.setState({
			colors: union(this.state.colors, [color])
		});
	}

	getColorById(colorId) {
		return findWhere(this.state.colors, {id: colorId});
	}

	handleChangeColor(color) {
		let curentColor = this.getColorById(color.id);
		curentColor.code = color.code;
		curentColor.name = color.name;
		this.setState({
			colors: this.state.colors
		});
	}

	handleDeleteColor(colorId) {
		let color = this.getColorById(colorId);
		this.setState({
			colors: without(this.state.colors, color)
		});
	}

	getSelectedColors() {
		return this.state.colors.filter(color => color.selected);
	}

	handleColorClick(colorId) {
		let color = this.getColorById(colorId);
		color.selected = !color.selected;
		this.setState({
			colors: this.state.colors
		});
	}

	render() {
		return (
			<div className="index">
				<HeaderComponent />

				<Grid>
					<Row>
						<Col md={7}>
							<PalettePanelComponent
								colors={this.state.colors}
								onColorClick={this.handleColorClick.bind(this)}
							/>
						</Col>

						<Col md={5}>
							<AddColorPanelComponent
								onAdd={this.handleAddColor.bind(this)}
							/>
							<EditColorPanelComponent
								colors={this.getSelectedColors()}
								onChange={this.handleChangeColor.bind(this)}
								onDelete={this.handleDeleteColor.bind(this)}
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
