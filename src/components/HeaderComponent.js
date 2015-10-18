'use strict';

import React from 'react';
import { Nav, Navbar, NavBrand, Label, NavItem } from 'react-bootstrap';

require('styles/Header.css');

class HeaderComponent extends React.Component {
	render() {
		return (
			<div className="header-component">
				<Navbar>
					<NavBrand>
						Color Palette <sup><Label>React</Label></sup>
					</NavBrand>

					<Nav right>
						<NavItem href={this.props.repoUrl}>
							<small>{this.props.repoName}</small>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

HeaderComponent.propTypes = {
	repoName: React.PropTypes.string,
	repoUrl: React.PropTypes.string
};
HeaderComponent.defaultProps = {
	repoName: 'VovanR/react-color-palette',
	repoUrl: 'https://github.com/VovanR/react-color-palette'
};

export default HeaderComponent;
