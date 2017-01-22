import React from 'react';
import shallowWithStore from '../../utils/reduxTestUtils';
import MobTimerContainer from '../mobTimer';
import MobTimer from '../../components/mobTimer';

describe('MobTimer container', () => {
  test('connects a <MobTimer /> component', () => {
    const container = shallowWithStore(<MobTimerContainer />);
    expect(container.type()).toBe(MobTimer);
  });

  test('maps onStart from dispatch to props', () => {
    const dispatch = jest.fn();
    const container = shallowWithStore(<MobTimerContainer />);
    expect(typeof container.prop('onStart')).toBe('function');
  });

  test('onStart emitts on start event', () => {
    // TODO
    // on click on the start button
    // emit an event that is picked up by
    // electron app, that toggles resize window
    // BUT -> IT SHOULD BE DONE BY DISPATCHING AN ACTION
    // do not want to couple electron specific code inside
    // redux specific client code...
  });
});