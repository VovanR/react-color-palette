'use strict';

import React from 'react';
import { Panel, Badge, Input } from 'react-bootstrap';
import ColorPaletteComponent from './ColorPaletteComponent';

require('styles/PalettePanel.css');

class PalettePanelComponent extends React.Component {
	handleMultiselectChange() {
		this.props.onMultiselectChange(!this.props.multiselect);
	}

	render() {
		var header = (
			<div>
				Added <Badge>{this.props.colors.length}</Badge>

				<Input
					type="checkbox"
					label="Multiselect"
					checked={this.props.multiselect}
					onChange={this.handleMultiselectChange.bind(this)}
				/>
			</div>
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
	onMultiselectChange: React.PropTypes.func
};
PalettePanelComponent.defaultProps = {
	colors: []
};

export default PalettePanelComponent;
