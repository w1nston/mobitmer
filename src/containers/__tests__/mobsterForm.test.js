import React from 'react';
import { reset } from 'redux-form';
import shallowWithStore from '../../utils/reduxTestUtils';
import MobsterForm, { FORM_NAME } from '../../components/forms/mobsterForm';
import MobsterFormContainer from '../mobsterForm';
import { addMobsterName } from '../../actions/mobsterFormActions';

describe('MobsterForm container', () => {
  test('connects a <MobsterForm /> component', () => {
    const container = shallowWithStore(<MobsterFormContainer />);
    expect(container.type()).toBe(MobsterForm);
  });

  test('maps onSubmit from dispatch to props', () => {
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobsterFormContainer />, null, dispatch);
    expect(typeof container.prop('onSubmit')).toBe('function');
  });

  test('onSubmit resets the form', () => {
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobsterFormContainer />, null, dispatch);
    const values = {};
    container.props().onSubmit(values);
    expect(dispatch).toHaveBeenCalledWith(reset(FORM_NAME));
  });

  test('onSubmit dispatches action to add new mobster', () => {
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobsterFormContainer />, null, dispatch);
    const mobsterName = 'mobster name';
    const values = { mobsterName };
    container.props().onSubmit(values);
    expect(dispatch).toHaveBeenCalledWith(addMobsterName(values.mobsterName));
  });
});
