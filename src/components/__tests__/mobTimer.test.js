import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MobTimer from '../mobTimer';

describe('<MobTimer/>', () => {
  test('renders', () => {
    const component = shallow(<MobTimer />);
    expect(toJson(component)).toMatchSnapshot();
  });

  test('onClick triggers prop onStart', () => {
    const onStart = jest.fn();
    const component = shallow(<MobTimer onStart={onStart} />);
    component.find('button').simulate('click');
    expect(onStart).toHaveBeenCalled();
  });
});
