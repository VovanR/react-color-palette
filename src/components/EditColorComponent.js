'use strict';

import React from 'react';
import { Input, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

require('styles/EditColor.css');

class EditColorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: props.code,
			name: props.name
		};
	}
	handleCodeChange() {
		this.setState({
			code: this.refs.code.getValue(),
			name: this.state.name
		});
	}
	handleNameChange() {
		this.setState({
			code: this.state.code,
			name: this.refs.name.getValue()
		});
	}
	handleSubmit(e) {
		e.preventDefault();
	}
	render() {
		return (
			<div
				className="editcolor-component palette-edit-color"
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
									onChange={this.handleCodeChange.bind(this)}
								/>
							</Col>

							<Col xs={5}>
								<Input
									type="text"
									placeholder="Red"
									ref="name"
									value={this.state.name}
									onChange={this.handleNameChange.bind(this)}
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
	code: React.PropTypes.string,
	name: React.PropTypes.string
};
EditColorComponent.defaultProps = {
	code: 'magenta',
	name: 'Magenta'
};

export default EditColorComponent;
