import {
  Map as immutableMap
} from 'immutable';
import { types, timeUnits } from '../actions/timerActions';

const initialState = immutableMap({
  endTime: null,
  timeOffset: timeUnits.TEN_MINUTES,
});

function startTimer(state, endTime) {
  return state
    .set('endTime', endTime);
}

function stopTimer(state, timeOffset) {
  return state
    .set('endTime', null)
    .set('timeOffset', timeOffset);
}

export default function timerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_TIMER:
      return startTimer(state, action.endTime);
    case types.STOP_TIMER:
      return stopTimer(state, action.timeOffset);
    default:
      return state;
  }
}

const getCurrentReducer = state => state.timerReducer;
export const getEndTime = state => getCurrentReducer(state).get('endTime');
export const getTimeOffset = state => getCurrentReducer(state).get('timeOffset');
