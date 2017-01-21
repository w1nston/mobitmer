import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MobsterList from '../mobsterList';

describe('<MobsterList/>', () => {
  test('renders', () => {
    const component = shallow(<MobsterList />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
