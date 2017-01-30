import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import mobsterListReducer from './mobsterListReducer';
import timerReducer from './timerReducer';

export default combineReducers({
  mobsterListReducer,
  timerReducer,
  form: reduxFormReducer,
});
