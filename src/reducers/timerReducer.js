import {
  Map as immutableMap
} from 'immutable';
import { types } from '../actions/timerActions';

const initialState = immutableMap({
  endTime: null,
});

function startTimer(state, endTime) {
  return state
    .set('endTime', endTime);
}

function stopTimer(state) {
  return state
    .set('endTime', null);
}

export default function timerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_TIMER:
      return startTimer(state, action.endTime);
    case types.STOP_TIMER:
      return stopTimer(state);
    default:
      return state;
  }
}

const getCurrentReducer = state => state.timerReducer;
export const getEndTime = state => getCurrentReducer(state).get('endTime');
