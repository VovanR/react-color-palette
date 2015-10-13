'use strict';

import React from 'react';
import { Panel, Badge } from 'react-bootstrap';
import ColorPaletteComponent from './ColorPaletteComponent';

require('styles//PalettePanel.css');

class PalettePanelComponent extends React.Component {
	render() {
		var header = (
			<span>
				Added <Badge>0</Badge>
			</span>
		);
		return (
			<div className="palettepanel-component">
				<Panel header={header}>
					<ColorPaletteComponent />
				</Panel>
			</div>
		);
	}
}

// Uncomment properties you need
// PalettePanelComponent.propTypes = {};
// PalettePanelComponent.defaultProps = {};

export default PalettePanelComponent;
