import React from 'react';
import moment from 'moment';
import shallowWithStore from '../../utils/reduxTestUtils';
import MobTimerContainer from '../mobTimer';
import MobTimer from '../../components/mobTimer';
import * as timerReducer from '../../reducers/timerReducer';
import { types, timeUnits } from '../../actions/timerActions';

describe('MobTimer container', () => {
  it('connects a <MobTimer /> component', () => {
    spyOn(timerReducer, 'getEndTime');
    const container = shallowWithStore(<MobTimerContainer />);
    expect(container.type()).toBe(MobTimer);
  });

  it('maps endTime from state to props', () => {
    const endTime = 'end time';
    spyOn(timerReducer, 'getEndTime').and.returnValue(endTime);
    const container = shallowWithStore(<MobTimerContainer />);
    expect(container.prop('endTime')).toBe(endTime);
  });

  it('maps prop onStart with dispatch of action type START_TIMER', () => {
    const state = {};
    const endTime = moment().add(timeUnits.TEN_MINUTES).unix();
    spyOn(timerReducer, 'getEndTime');
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobTimerContainer />, state, dispatch);
    container.prop('onStart')();
    expect(dispatch).toHaveBeenCalledWith({
      type: types.START_TIMER,
      endTime,
    });
  });

  it('maps prop onStop with dispatch of action type STOP_TIMER', () => {
    const state = {};
    spyOn(timerReducer, 'getEndTime');
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobTimerContainer />, state, dispatch);
    container.prop('onStop')();
    expect(dispatch).toHaveBeenCalledWith({
      type: types.STOP_TIMER,
    });
  });
});
