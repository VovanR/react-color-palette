'use strict';

import React from 'react';
import { Panel, Badge, Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/EditColorPanel.css');

class EditColorPanelComponent extends React.Component {
	render() {
		let header = (
			<span>
				Selected <Badge>{0}</Badge>
			</span>
		);
		return (
			<div className="editcolorpanel-component">
				<Panel header={header}>
				</Panel>
			</div>
		);
	}
}

// Uncomment properties you need
// EditColorPanelComponent.propTypes = {};
// EditColorPanelComponent.defaultProps = {};

export default EditColorPanelComponent;
