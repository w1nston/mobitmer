import { List as immutableList } from 'immutable';
import mobsterListReducer, { getListOfMobsters } from '../mobsterListReducer';
import { addMobsterName } from '../../actions/mobsterFormActions';

describe('mobsterListReducer', () => {
  describe('when state is undefined', () => {
    it('returns new empty list', () => {
      expect(mobsterListReducer()).toEqual(immutableList());
    });
  });

  describe('when action type is ADD_MOBSTER_NAME', () => {
    it('returns new state with mobster added', () => {
      const name = 'name';
      expect(mobsterListReducer(undefined, addMobsterName(name))).toEqual(
        immutableList.of(name)
      );
    });
  });
});

describe('getListOfMobsters', () => {
  test('returns the list of mobsters from state', () => {
    const state = {
      mobsterListReducer: immutableList(),
    };
    expect(getListOfMobsters(state)).toBe(state.mobsterListReducer);
  });
});