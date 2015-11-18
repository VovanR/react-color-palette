'use strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

require('styles/TwoCols.css');

class TwoColsComponent extends React.Component {
  render() {
    return (
      <div className="twocols-component">
		<Grid fluid>
			<Row>
				<Col md={6}>
					{this.props.children[0]}
				</Col>

				<Col md={6}>
					{this.props.children[1]}
				</Col>
			</Row>
		</Grid>
      </div>
    );
  }
}

TwoColsComponent.displayName = 'TwoColsComponent';

// Uncomment properties you need
// TwoColsComponent.propTypes = {};
// TwoColsComponent.defaultProps = {};

export default TwoColsComponent;
