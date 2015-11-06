'use strict';

import React from 'react';
import SelectedColorComponent from './SelectedColorComponent';
import { Panel, Badge } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';

require('styles/EditColorPanel.css');

class EditColorPanelComponent extends React.Component {
	handleChangeColor(color) {
		this.props.onChange(color);
	}

	handleDeleteColor(colorId) {
		this.props.onDelete(colorId);
	}

	render() {
		let header = (
			<span>
				Selected <Badge>{this.props.colors.length}</Badge>
			</span>
		);

		return (
			<div className="editcolorpanel-component">
				<Panel header={header}>
					<ScrollArea
						speed={0.8}
						className="editcolorpanel-component-placeholder"
						contentClassName="palette-selected-colors"
						horizontal={false}
					>
						{this.props.colors.map(color => {
							return (
								<SelectedColorComponent
									key={color.id}
									color={color}
									onChange={this.handleChangeColor.bind(this)}
									onDelete={this.handleDeleteColor.bind(this)}
									onMouseEnter={this.props.onMouseEnter.bind(this, color.id)}
									onMouseLeave={this.props.onMouseLeave.bind(this, color.id)}
								/>
							);
						})}
					</ScrollArea>
				</Panel>
			</div>
		);
	}
}

EditColorPanelComponent.propTypes = {
	colors: React.PropTypes.array,
	onChange: React.PropTypes.func,
	onDelete: React.PropTypes.func,
	onMouseEnter: React.PropTypes.func,
	onMouseLeave: React.PropTypes.func
};
EditColorPanelComponent.defaultProps = {
	colors: []
};

export default EditColorPanelComponent;
