'use strict';

import React from 'react';
import SelectedColorComponent from './SelectedColorComponent';
import { Panel, Badge } from 'react-bootstrap';

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
					<div className="palette-selected-colors-placeholder">
						<div className="palette-selected-colors__scrollbar">
							<div className="palette-selected-colors">
								{this.props.colors.map(color => {
									return (
										<SelectedColorComponent
											key={color.id}
											color={color}
											onChange={this.handleChangeColor.bind(this)}
											onDelete={this.handleDeleteColor.bind(this)}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</Panel>
			</div>
		);
	}
}

EditColorPanelComponent.propTypes = {
	colors: React.PropTypes.array,
	onChange: React.PropTypes.func,
	onDelete: React.PropTypes.func
};
EditColorPanelComponent.defaultProps = {
	colors: []
};

export default EditColorPanelComponent;
