'use strict';

import React from 'react';
import SelectedColorComponent from './SelectedColorComponent';
import { Panel, Badge } from 'react-bootstrap';

require('styles/EditColorPanel.css');

class EditColorPanelComponent extends React.Component {
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
											key={color.code}
											code={color.code}
											name={color.name}
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
	colors: React.PropTypes.array
};
EditColorPanelComponent.defaultProps = {
	colors: []
};

export default EditColorPanelComponent;
