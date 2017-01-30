export const types = {
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
};

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const TEN_MINUTES = 10 * ONE_MINUTE;

export const timeUnits = {
  ONE_SECOND,
  ONE_MINUTE,
  TEN_MINUTES,
};

export const startTimer = endTime => ({
  type: types.START_TIMER,
  endTime,
});

export const stopTimer = () => ({
  type: types.STOP_TIMER,
});
