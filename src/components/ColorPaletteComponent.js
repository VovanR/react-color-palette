'use strict';

import React from 'react';
import ColorPaletteItemComponent from './ColorPaletteItemComponent';

require('styles/ColorPalette.css');

class ColorPaletteComponent extends React.Component {
	render() {
		return (
			<div className="colorpalette-component">
				<div className="color-palette">
					{this.props.colors.map(color => {
						return (
							<ColorPaletteItemComponent
								key={color.id}
								code={color.code}
							/>
						)
					})}
				</div>
			</div>
		);
	}
}

ColorPaletteComponent.propTypes = {
	colors: React.PropTypes.array
};
ColorPaletteComponent.defaultProps = {
	colors: []
};

export default ColorPaletteComponent;
