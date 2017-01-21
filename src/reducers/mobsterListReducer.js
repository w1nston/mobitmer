import { List as immutableList } from 'immutable';
import { types } from '../actions/mobsterFormActions';

export default function mobsterListReducer(state = immutableList(), action = {}) {
  switch (action.type) {
    case types.ADD_MOBSTER_NAME:
      return state.push(action.name);
    default:
      return state;
  }
}

const getCurrentReducer = state => state.mobsterListReducer;
export const getListOfMobsters = state => getCurrentReducer(state);
