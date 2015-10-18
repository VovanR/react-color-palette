'use strict';

import React from 'react';
import SelectedColorComponent from './SelectedColorComponent';
import { Panel, Badge, Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/EditColorPanel.css');

class EditColorPanelComponent extends React.Component {
	render() {
		let header = (
			<span>
				Selected <Badge>{0}</Badge>
			</span>
		);
		let color = '#ff0000';
		let name = 'Red';
		return (
			<div className="editcolorpanel-component">
				<Panel header={header}>
					<div className="palette-selected-colors-placeholder">
						<div className="palette-selected-colors__scrollbar">
							<div className="palette-selected-colors">
								<SelectedColorComponent value={color} name={name} />
							</div>
						</div>
					</div>
				</Panel>
			</div>
		);
	}
}

// Uncomment properties you need
// EditColorPanelComponent.propTypes = {};
// EditColorPanelComponent.defaultProps = {};

export default EditColorPanelComponent;
