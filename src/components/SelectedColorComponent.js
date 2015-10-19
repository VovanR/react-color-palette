'use strict';

import React from 'react';
import EditColorComponent from './EditColorComponent';

require('styles/SelectedColor.css');

class SelectedColorComponent extends React.Component {
	render() {
		let value = this.props.value;
		let name = this.props.name;
		return (
			<div className="selectedcolor-component">
				<div
					className="palette-selected-color__background"
					style={{
						backgroundColor: value,
						color: value
					}}
				>
					<span className="palette-selected-color__edit" tabIndex="0">
						edit
						<span className="glyphicon glyphicon-option-horizontal" aria-hidden="true" />
					</span>

					<span className="palette-selected-color__remove" tabIndex="0">
						destruct
						<span className="glyphicon glyphicon-remove" aria-hidden="true" />
					</span>

					<div className="palette-selected-color__name">
						{name}
					</div>

					<div className="palette-selected-color__value">
						{value}
					</div>
				</div>

				<EditColorComponent value={value} name={name} />
			</div>
		);
	}
}

// Uncomment properties you need
// SelectedColorComponent.propTypes = {};
// SelectedColorComponent.defaultProps = {};

export default SelectedColorComponent;
