/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import EditColorComponent from 'components//EditColorComponent.js';

describe('EditColorComponent', () => {
	let component;

	beforeEach(() => {
		component = createComponent(EditColorComponent, {
			color: {
				code: '#ff0000',
				name: 'Red',
				onMouseEnter: () => {},
				onMouseLeave: () => {}
			}
		});
	});

	it('should have its component name as default className', () => {
		expect(component.props.className).to.equal('editcolor-component');
	});
});
