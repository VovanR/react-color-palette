'use strict';

import React from 'react';
import { Panel, Badge, Input, Fade } from 'react-bootstrap';
import { where } from 'lodash';
import ColorPaletteComponent from './ColorPaletteComponent';
import TwoCols from './TwoColsComponent';

require('styles/PalettePanel.css');

class PalettePanelComponent extends React.Component {
	handleSelectAllChange(isAllSelected) {
		this.props.onSelectAllChange(!isAllSelected);
	}

	handleMultiselectChange() {
		this.props.onMultiselectChange(!this.props.multiselect);
	}

	_isAllSelected() {
		let colors = this.props.colors;
		if (!colors.length) {
			return false;
		}
		return where(colors, {selected: true}).length === colors.length;
	}

	render() {
		let isAllSelected = this._isAllSelected();
		let header = (
			<TwoCols>
				<span>Added <Badge>{this.props.colors.length}</Badge></span>
				<Fade
					in={!!this.props.colors.length}
					unmountOnExit
				>
					<span>
						<Input
							type="checkbox"
							label="Multiselect"
							checked={this.props.multiselect}
							onChange={this.handleMultiselectChange.bind(this)}
						/>

						<Input
							type="checkbox"
							label="All"
							checked={isAllSelected}
							onChange={this.handleSelectAllChange.bind(this, isAllSelected)}
						/>
					</span>
				</Fade>
			</TwoCols>
		);

		return (
			<div className="palettepanel-component">
				<Panel header={header}>
					<ColorPaletteComponent
						colors={this.props.colors}
						onColorClick={this.props.onColorClick}
					/>
				</Panel>
			</div>
		);
	}
}

PalettePanelComponent.propTypes = {
	colors: React.PropTypes.array,
	onColorClick: React.PropTypes.func,
	multiselect: React.PropTypes.bool,
	onSelectAllChange: React.PropTypes.func,
	onMultiselectChange: React.PropTypes.func
};
PalettePanelComponent.defaultProps = {
	colors: []
};

export default PalettePanelComponent;
