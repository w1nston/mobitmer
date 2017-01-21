import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import mobsterListReducer from './mobsterListReducer';

export default combineReducers({
  mobsterListReducer,
  form: reduxFormReducer,
});
