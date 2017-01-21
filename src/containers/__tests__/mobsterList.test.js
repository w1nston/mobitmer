import React from 'react';
import { List as immutableList } from 'immutable';
import shallowWithStore from '../../utils/reduxTestUtils';
import MobsterListContainer from '../mobsterList';
import MobsterList from '../../components/mobsterList';
import * as mobsterListReducer from '../../reducers/mobsterListReducer';

describe('MobsterList container', () => {
  test('connects a <MobsterList /> component', () => {
    const container = shallowWithStore(<MobsterListContainer />);
    expect(container.type()).toBe(MobsterList);
  });

  test('maps prop mobsters from state', () => {
    const mobsters = immutableList.of('first mobster');
    spyOn(mobsterListReducer, 'getListOfMobsters').and.returnValue(mobsters);
    const container = shallowWithStore(<MobsterListContainer />);
    expect(container.prop('mobsters')).toEqual(mobsters);
  });
});
