import rootReducer from '../index';
import mobsterListReducer from '../mobsterListReducer';

test('reducers are combined correctly', () => {
  expect(rootReducer()).toEqual({
    mobsterListReducer: mobsterListReducer(),
    form: {},
  });
});
