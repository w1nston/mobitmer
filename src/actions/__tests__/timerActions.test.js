import {
  startTimer,
  stopTimer,
  types,
} from '../timerActions';

describe('startTimer', () => {
  it('returns object with correct type', () => {
    expect(startTimer().type).toBe(types.START_TIMER);
  });

  it('returns object with provided start time', () => {
    const endTime = 'end time';
    expect(startTimer(endTime).endTime).toBe(endTime);
  });
});

describe('stopTimer', () => {
  it('returns object with correct type', () => {
    expect(stopTimer().type).toBe(types.STOP_TIMER);
  });
});
