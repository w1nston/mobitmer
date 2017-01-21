import React from 'react';
import { shallow } from 'enzyme';
import { Field, reduxForm } from 'redux-form';
import { MobsterForm } from '../mobsterForm';

describe('<MobsterForm/>', () => {
  test('renders as a form', () => {
    const component = shallow(<MobsterForm />);
    expect(component.type()).toBe('form');
  });

  test('handles submit defined by callback prop', () => {
    const onSubmit = jest.fn();
    const component = shallow(<MobsterForm handleSubmit={onSubmit} />);
    expect(component.find('form').prop('onSubmit')).toEqual(onSubmit);
    component.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });

  test('renders a Field for mobster name', () => {
    const component = shallow(<MobsterForm />);
    const field = component.find(Field);
    expect(field.length).toBe(1);
    expect(field.prop('component')).toBe('input');
    expect(field.prop('name')).toBe('mobsterName');
    expect(field.prop('type')).toBe('text');
    expect(field.prop('placeholder')).toBe('Name of mobster');
  });

  test('renders a submit button', () => {
    const component = shallow(<MobsterForm />);
    const submitButton = component.find('button');
    expect(submitButton.length).toBe(1);
    expect(submitButton.prop('type')).toBe('submit');
    expect(submitButton.text()).toBe('Add mobster');
  });
});
