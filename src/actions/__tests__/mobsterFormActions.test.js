import { addMobsterName, types } from '../mobsterFormActions';

describe('addMobsterName', () => {
  test('returns object with correct type', () => {
    const name = 'name';
    expect(addMobsterName(name)).toEqual({
      type: types.ADD_MOBSTER_NAME,
      name,
    });
  });
});
