'use strict';

import React from 'react';
import { Panel, Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/AddColorPanel.css');

class AddColorPanelComponent extends React.Component {
	handleSubmit(e) {
		console.log(this.refs.code.getValue(), this.refs.name.getValue());
		e.preventDefault();
	}
	render() {
		return (
			<div className="addcolorpanel-component">
				<Panel header="New">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<Grid fluid={true}>
							<Row>
								<Col xs={5}>
									<Input
										type="text"
										placeholder="#ff0000"
										ref="code"
										autoComplete="off"
									/>
								</Col>

								<Col xs={5}>
									<Input
										type="text"
										placeholder="Red"
										ref="name"
										autoComplete="off"
									/>
								</Col>

								<Col xs={2}>
									<Button type="submit"><Glyphicon glyph="plus" /></Button>
								</Col>
							</Row>
						</Grid>
					</form>
				</Panel>
			</div>
		);
	}
}

// Uncomment properties you need
// AddColorPanelComponent.propTypes = {};
// AddColorPanelComponent.defaultProps = {};

export default AddColorPanelComponent;
