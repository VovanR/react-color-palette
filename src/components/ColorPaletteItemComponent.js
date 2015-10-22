'use strict';

import React from 'react';

require('styles/ColorPaletteItem.css');

class ColorPaletteItemComponent extends React.Component {
	render() {
		return (
			<span
				className="colorpaletteitem-component"
				style={{
					color: this.props.code,
					backgroundColor: this.props.code
				}}
			/>
		);
	}
}

ColorPaletteItemComponent.propTypes = {
	code: React.PropTypes.string
};
ColorPaletteItemComponent.defaultProps = {
	code: 'magenta'
};

export default ColorPaletteItemComponent;
