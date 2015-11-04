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
								selected={color.selected}
								onClick={this.props.onColorClick.bind(this, color.id)}
							/>
						)
					})}
				</div>
			</div>
		);
	}
}

ColorPaletteComponent.propTypes = {
	colors: React.PropTypes.array,
	onColorClick: React.PropTypes.func
};
ColorPaletteComponent.defaultProps = {
	colors: []
};

export default ColorPaletteComponent;
