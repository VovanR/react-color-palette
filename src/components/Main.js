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
		return (
			<div className="index">
				<HeaderComponent />

				<Grid>
					<Row>
						<Col md={7}>
							<PalettePanelComponent />
						</Col>

						<Col md={5}>
							<AddColorPanelComponent />
							<EditColorPanelComponent />
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
