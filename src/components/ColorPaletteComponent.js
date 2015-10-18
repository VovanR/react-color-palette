'use strict';

import React from 'react';
import ColorPaletteItemComponent from './ColorPaletteItemComponent';

require('styles/ColorPalette.css');

class ColorPaletteComponent extends React.Component {
	render() {
		let color = '#ff0000';
		return (
			<div className="colorpalette-component">
				<div className="color-palette">
					<ColorPaletteItemComponent value={color} />
				</div>
			</div>
		);
	}
}

// Uncomment properties you need
ColorPaletteComponent.propTypes = {
	value: React.PropTypes.string
};
// ColorPaletteComponent.defaultProps = {};

export default ColorPaletteComponent;
