'use strict';

import React from 'react';
import { Panel, Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/AddColorPanel.css');

class AddColorPanelComponent extends React.Component {
	render() {
		return (
			<div className="addcolorpanel-component">
				<Panel header="New">
					<Grid fluid={true}>
						<Row>
							<Col xs={5}>
								<Input
									type="text"
									placeholder="#ff0000"
									ref="value"
								/>
							</Col>

							<Col xs={5}>
								<Input
									type="text"
									placeholder="Red"
									ref="name"
								/>
							</Col>

							<Col xs={2}>
								<Button><Glyphicon glyph="plus" /></Button>
							</Col>
						</Row>
					</Grid>
				</Panel>
			</div>
		);
	}
}

// Uncomment properties you need
// AddColorPanelComponent.propTypes = {};
// AddColorPanelComponent.defaultProps = {};

export default AddColorPanelComponent;
