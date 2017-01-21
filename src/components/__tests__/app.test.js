import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import MobsterForm from '../../containers/mobsterForm';
import MobsterList from '../../containers/mobsterList';

describe('<App/>', () => {
  test('renders a <MobsterForm />', () => {
    const component = shallow(<App />);
    expect(component.find(MobsterForm).length).toBe(1);
  });

  test('renders a <MobsterList />', () => {
    const component = shallow(<App />);
    expect(component.find(MobsterList).length).toBe(1);
  });
});
