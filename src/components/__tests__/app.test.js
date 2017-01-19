import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('<App/>', () => {
  test('renders', () => {
    const component = shallow(<App />);
    expect(component.type()).not.toBe(null);
  });
});
