'use strict';

import React from 'react';
import { Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import tinycolor from 'tinycolor2';

require('styles/EditColor.css');

class EditColorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: props.color.code,
			name: props.color.name
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		let code = this.state.code.trim();
		let name = this.state.name.trim();

		if (!code || !tinycolor(code).isValid()) {
			return;
		}

		name = name ? name : code;
		code = tinycolor(code).toString();

		this.setState({
			code: code,
			name: name
		}, () => {
			this.props.onChange({
				id: this.props.color.id,
				code: code,
				name: name
			});
		});
	}

	render() {
		return (
			<div
				className="editcolor-component"
				style={{ backgroundColor: this.state.code }}
			>
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
								/>
							</Col>

							<Col xs={5}>
								<Input
									type="text"
									placeholder="Red"
									ref="name"
									value={this.state.name}
									onChange={e => this.setState({name: e.target.value})}
								/>
							</Col>

							<Col xs={2}>
								<Button type="submit"><Glyphicon glyph="ok" /></Button>
							</Col>
						</Row>
					</Grid>
				</form>
			</div>
		);
	}
}

EditColorComponent.propTypes = {
	onChange: React.PropTypes.func,
	color: React.PropTypes.object
};
// EditColorComponent.defaultProps = {};

export default EditColorComponent;
