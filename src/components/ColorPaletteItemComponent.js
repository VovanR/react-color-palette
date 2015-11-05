'use strict';

import React from 'react';
import classNames from 'classnames';

require('styles/ColorPaletteItem.css');

class ColorPaletteItemComponent extends React.Component {
	render() {
		let className = classNames(
			'colorpaletteitem-component',
			{
				'colorpaletteitem-component_state_selected': this.props.selected
			},
			{
				'colorpaletteitem-component_state_hovered': this.props.hovered
			}
		);

		return (
			<span
				className={className}
				style={{
					color: this.props.code,
					backgroundColor: this.props.code
				}}
				onClick={this.props.onClick}
			/>
		);
	}
}

ColorPaletteItemComponent.propTypes = {
	code: React.PropTypes.string,
	selected: React.PropTypes.bool,
	hovered: React.PropTypes.bool
};
ColorPaletteItemComponent.defaultProps = {
	code: 'magenta',
	selected: false,
	hovered: false
};

export default ColorPaletteItemComponent;
