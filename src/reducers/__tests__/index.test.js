import rootReducer from '../index';
import mobsterListReducer from '../mobsterListReducer';
import timerReducer from '../timerReducer';

test('reducers are combined correctly', () => {
  expect(rootReducer()).toEqual({
    mobsterListReducer: mobsterListReducer(),
    timerReducer: timerReducer(),
    form: {},
  });
});
