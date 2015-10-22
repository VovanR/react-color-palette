'use strict';

import React from 'react';
import EditColorComponent from './EditColorComponent';

require('styles/SelectedColor.css');

class SelectedColorComponent extends React.Component {
	render() {
		let code = this.props.code;
		let name = this.props.name;
		return (
			<div className="selectedcolor-component">
				<div
					className="palette-selected-color__background"
					style={{
						backgroundColor: code,
						color: code
					}}
				>
					<span className="palette-selected-color__edit" tabIndex="0">
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

				<EditColorComponent code={code} name={name} />
			</div>
		);
	}
}

SelectedColorComponent.propTypes = {
	code: React.PropTypes.string,
	name: React.PropTypes.string
};
SelectedColorComponent.defaultProps = {
	code: 'magenta',
	name: 'Magenta'
};

export default SelectedColorComponent;
