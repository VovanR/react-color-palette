/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import AddColorPanelComponent from 'components//AddColorPanelComponent.js';

describe('AddColorPanelComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(AddColorPanelComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('addcolorpanel-component');
    });
});
