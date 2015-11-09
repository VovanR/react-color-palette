require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderComponent from './HeaderComponent';
import PalettePanelComponent from './PalettePanelComponent';
import AddColorPanelComponent from './AddColorPanelComponent';
import EditColorPanelComponent from './EditColorPanelComponent';
import {union, uniqueId, findWhere, without, times, random, sample} from 'lodash';
import randomColor from 'randomcolor';

class AppComponent extends React.Component {
	constructor() {
		super();
		let colors = [];
		times(90, () => {
			let color = randomColor();
			colors.push({
				id: uniqueId('color'),
				code: color,
				name: color,
				selected: false,
				hovered: false
			});
		});
		this.state = {
			colors: colors
		};

		setTimeout(() => {
			this._startSleepAnimation();
		}, 250);
	}

	handleAddColor(color) {
		this.setState({
			colors: union(this.state.colors, [color])
		});
	}

	getColorById(colorId) {
		return findWhere(this.state.colors, {id: colorId});
	}
	updateColors() {
		this.setState({
			colors: this.state.colors
		});
	}

	handleChangeColor(color) {
		let curentColor = this.getColorById(color.id);
		curentColor.code = color.code;
		curentColor.name = color.name;
		this.updateColors();
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
		this.updateColors();
	}

	handleMouseEnterColor(colorId) {
		let color = this.getColorById(colorId);
		color.hovered = true;
		this.updateColors();
	}

	handleMouseLeaveColor(colorId) {
		let color = this.getColorById(colorId);
		color.hovered = false;
		this.updateColors();
	}

	_startSleepAnimation() {
		let wait = random(1, 10) * 100;
		setTimeout(() => {
			this._selectRandomColor();
			this._startSleepAnimation();
		}, wait);
	}

	_selectRandomColor() {
		let color = sample(this.state.colors);
		color.hovered = true;
		this.setState({colors: this.state.colors});
		let wait = random(5, 50) * 100;
		setTimeout(() => {
			if (!color) {
				return;
			}
			color.hovered = false;
			this.setState({colors: this.state.colors});
		}, wait);
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
								onMouseEnter={this.handleMouseEnterColor.bind(this)}
								onMouseLeave={this.handleMouseLeaveColor.bind(this)}
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
