/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddCategory from '../src/screens/AddCategory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import FloatingLabel from '../src/components/FloatingLabel';

it('renders correctly', () => {
  // const tree = renderer.create(<AddCategory />).toJSON();
  // expect(tree).toMatchSnapshot();
  renderer.create(<AddCategory />);
});

it('renders the TextInput component', () => {
  const tree = renderer
    .create(
      <FloatingLabel
        attrName="category"
        value="cat test"
        title="apple banana kiwi"
        updateMasterState={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
