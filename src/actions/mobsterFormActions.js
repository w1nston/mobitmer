export const types = {
  ADD_MOBSTER_NAME: 'ADD_MOBSTER_NAME',
};

export const addMobsterName = name => ({
  type: types.ADD_MOBSTER_NAME,
  name,
});
