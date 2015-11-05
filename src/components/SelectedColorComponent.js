'use strict';

import React from 'react';
import EditColorComponent from './EditColorComponent';
import classNames from 'classnames';

require('styles/SelectedColor.css');

class SelectedColorComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			edit: false
		};
	}

	handleChange(color) {
		this.props.onChange(color);
	}

	handleClickEdit() {
		this.setState({edit: !this.state.edit});
	}

	render() {
		let color = this.props.color;
		let code = color.code;
		let name = color.name;
		let className = classNames(
			'selectedcolor-component',
			{'selectedcolor-component_mode_edit': this.state.edit}
		);

		return (
			<div className={className}>
				<div
					className="palette-selected-color__background"
					style={{
						backgroundColor: code,
						color: code
					}}
				>
					<span
						className="palette-selected-color__edit"
						tabIndex="0"
						onClick={this.handleClickEdit.bind(this)}
					>
						edit
						<span
							className="glyphicon glyphicon-option-horizontal"
							aria-hidden="true"
						/>
					</span>

					<span className="palette-selected-color__remove" tabIndex="0">
						destruct
						<span
							className="glyphicon glyphicon-remove"
							aria-hidden="true"
						/>
					</span>

					<div className="palette-selected-color__name">
						{name}
					</div>

					<div className="palette-selected-color__code">
						{code}
					</div>
				</div>

				{this.state.edit ? (
					<EditColorComponent
						color={color}
						onChange={this.handleChange.bind(this)}
					/>
				) : false}
			</div>
		);
	}
}

SelectedColorComponent.propTypes = {
	color: React.PropTypes.object,
	onChange: React.PropTypes.func
};
// SelectedColorComponent.defaultProps = {};

export default SelectedColorComponent;
