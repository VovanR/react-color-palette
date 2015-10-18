'use strict';

import React from 'react';

require('styles/SelectedColor.css');

class SelectedColorComponent extends React.Component {
	render() {
		return (
			<div class="palette-selected-color__background"
				style="background-color: {{ value }}; color: {{ value }}">
				<span class="palette-selected-color__edit" tabindex="0">
					edit
					<span class="glyphicon glyphicon-option-horizontal" aria-hidden="true" />
				</span>

				<span class="palette-selected-color__remove" tabindex="0">
					destruct
					<span class="glyphicon glyphicon-remove" aria-hidden="true" />
				</span>

				<div class="palette-selected-color__name">
					{{ name }}
				</div>

				<div class="palette-selected-color__value">
					{{ value }}
				</div>
			</div>
		);
	}
}

// Uncomment properties you need
// SelectedColorComponent.propTypes = {};
// SelectedColorComponent.defaultProps = {};

export default SelectedColorComponent;
