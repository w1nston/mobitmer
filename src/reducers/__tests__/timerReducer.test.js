import {
  Map as immutableMap
} from 'immutable';
import timerReducer, {
  getEndTime,
  getTimeOffset,
} from '../timerReducer';
import { types, timeUnits } from '../../actions/timerActions';

describe('timerReducer', () => {
  describe('when state is undefined', () => {
    it('returns initial state', () => {
      expect(timerReducer()).toEqual(immutableMap({
        endTime: null,
        timeOffset: timeUnits.TEN_MINUTES,
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
    it('returns correct new state', () => {
      const timeOffset = 'expected time offset';
      const state = immutableMap({
        endTime: 'existing end time',
        timeOffset: 'time offset',
      });
      expect(
        timerReducer(state, {
          type: types.STOP_TIMER,
          timeOffset,
        })
      ).toEqual(immutableMap({
        endTime: null,
        timeOffset,
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

describe('getTimeOffset', () => {
  it('returns the time offset from state', () => {
    const timeOffset = 'time offset';
    const state = {
      timerReducer: immutableMap({
        timeOffset,
      }),
    };
    expect(getTimeOffset(state)).toBe(timeOffset);
  });
});
