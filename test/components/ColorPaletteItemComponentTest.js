/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ColorPaletteItemComponent from 'components//ColorPaletteItemComponent.js';

describe('ColorPaletteItemComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(ColorPaletteItemComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('colorpaletteitem-component');
    });
});
