require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderComponent from './HeaderComponent';
import PalettePanelComponent from './PalettePanelComponent';
import AddColorPanelComponent from './AddColorPanelComponent';
import EditColorPanelComponent from './EditColorPanelComponent';

class AppComponent extends React.Component {
	render() {
		let colors = [
			{ code: '#ff0000', name: 'Red' },
			{ code: '#00ff00', name: 'Green' },
			{ code: '#0000ff', name: 'Blue' }
		];
		return (
			<div className="index">
				<HeaderComponent />

				<Grid>
					<Row>
						<Col md={7}>
							<PalettePanelComponent colors={colors} />
						</Col>

						<Col md={5}>
							<AddColorPanelComponent />
							<EditColorPanelComponent colors={colors} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
