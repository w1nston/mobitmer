import {
  Map as immutableMap
} from 'immutable';
import timerReducer, {
  getEndTime,
} from '../timerReducer';
import { types } from '../../actions/timerActions';

describe('timerReducer', () => {
  describe('when state is undefined', () => {
    it('returns initial state', () => {
      expect(timerReducer()).toEqual(immutableMap({
        endTime: null,
      }));
    });
  });

  describe('when action type is START_TIMER', () => {
    it('returns new state with end time set', () => {
      const state = immutableMap({
        endTime: 'existing end time',
      });
      const endTime = 'end time';
      expect(timerReducer(state, {
        type: types.START_TIMER,
        endTime,
      })).toEqual(immutableMap({
        endTime,
      }));
    });
  });

  describe('when action type is STOP_TIMER', () => {
    // TODO: I want to add remainder somehow rather than resetting on stop
    it('returns new state with end time set to null', () => {
      const state = immutableMap({
        endTime: 'existing end time',
      });
      expect(timerReducer(state, {
        type: types.STOP_TIMER,
      })).toEqual(immutableMap({
        endTime: null,
      }));
    });
  });
});

describe('getEndTime', () => {
  it('returns the end time from state', () => {
    const endTime = 'end time';
    const state = {
      timerReducer: immutableMap({
        endTime,
      }),
    };
    expect(getEndTime(state)).toBe(endTime);
  });
});
