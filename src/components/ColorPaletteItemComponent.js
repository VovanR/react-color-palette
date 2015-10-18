'use strict';

import React from 'react';

require('styles/ColorPaletteItem.css');

class ColorPaletteItemComponent extends React.Component {
	render() {
		return (
			<span
				className="colorpaletteitem-component"
				style={{
					color: this.props.value,
					backgroundColor: this.props.value
				}}
			/>
		);
	}
}

// Uncomment properties you need
// ColorPaletteItemComponent.propTypes = {};
// ColorPaletteItemComponent.defaultProps = {};

export default ColorPaletteItemComponent;
