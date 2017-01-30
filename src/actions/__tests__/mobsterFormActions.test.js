import { addMobsterName, types } from '../mobsterFormActions';

describe('addMobsterName', () => {
  it('returns object with correct type', () => {
    expect(addMobsterName().type).toBe(types.ADD_MOBSTER_NAME);
  });

  it('returns object containing provided name', () => {
    const name = 'name';
    expect(addMobsterName(name).name).toBe(name);
  });
});
