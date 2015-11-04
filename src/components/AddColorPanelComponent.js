'use strict';

import React from 'react';
import { Panel, Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import {uniqueId} from 'lodash';

require('styles/AddColorPanel.css');

class AddColorPanelComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			code: '',
			name: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		let code = this.state.code.trim();
		let name = this.state.name.trim();

		if (!code) {
			return;
		}

		this.props.onAdd({
			id: uniqueId('color'),
			code: code,
			name: name ? name : code
		});

		this.setState({
			code: '',
			name: ''
		})
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
										value={this.state.code}
										onChange={e => this.setState({code: e.target.value})}
										autoComplete="off"
									/>
								</Col>

								<Col xs={5}>
									<Input
										type="text"
										placeholder="Red"
										ref="name"
										value={this.state.name}
										onChange={e => this.setState({name: e.target.value})}
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

AddColorPanelComponent.propTypes = {
	onAdd: React.PropTypes.func
};
// AddColorPanelComponent.defaultProps = {};

export default AddColorPanelComponent;
