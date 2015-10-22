'use strict';

import React from 'react';
import { Panel, Badge } from 'react-bootstrap';
import ColorPaletteComponent from './ColorPaletteComponent';

require('styles/PalettePanel.css');

class PalettePanelComponent extends React.Component {
	render() {
		var header = (
			<span>
				Added <Badge>{this.props.colors.length}</Badge>
			</span>
		);
		return (
			<div className="palettepanel-component">
				<Panel header={header}>
					<ColorPaletteComponent colors={this.props.colors} />
				</Panel>
			</div>
		);
	}
}

PalettePanelComponent.propTypes = {
	colors: React.PropTypes.array
};
PalettePanelComponent.defaultProps = {
	colors: []
};

export default PalettePanelComponent;
