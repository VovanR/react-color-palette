'use strict';

import React from 'react';
import { Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/EditColor.css');

class EditColorComponent extends React.Component {
	render() {
		const value = this.props.value;
		const name = this.props.name;
		return (
			<div
				className="editcolor-component palette-edit-color"
				style={{ backgroundColor: value }}
			>
				<Grid fluid={true}>
					<Row>
						<Col xs={5}>
							<Input
								type="text"
								placeholder="#ff0000"
								ref="value"
								value={value}
							/>
						</Col>

						<Col xs={5}>
							<Input
								type="text"
								placeholder="Red"
								ref="name"
								value={name}
							/>
						</Col>

						<Col xs={2}>
							<Button><Glyphicon glyph="ok" /></Button>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

// Uncomment properties you need
// EditColorComponent.propTypes = {};
// EditColorComponent.defaultProps = {};

export default EditColorComponent;
