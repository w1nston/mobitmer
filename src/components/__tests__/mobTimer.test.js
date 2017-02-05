import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import MobTimer from '../mobTimer';
import { timeUnits } from '../../actions/timerActions';

jest.useFakeTimers();

describe('<MobTimer/>', () => {
  it('forces an update each second', () => { // Iffy...
    const component = shallow(<MobTimer />);
    component.instance().componentDidMount();
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(timeUnits.ONE_SECOND);
    expect(typeof setInterval.mock.calls[0][0]).toBe('function');
  });

  it('renders a start button', () => {
    const onStart = jest.fn();
    const component = shallow(<MobTimer onStart={onStart} />);
    const startButton = component.find('button').at(0);
    expect(startButton.length).toBe(1);
    expect(startButton.text()).toBe('Start');
    startButton.simulate('click');
    expect(onStart).toHaveBeenCalled();
  });

  it('renders a stop button', () => {
    const onStop = jest.fn();
    const component = shallow(<MobTimer onStop={onStop} />);
    const stopButton = component.find('button').at(1);
    expect(stopButton.length).toBe(1);
    expect(stopButton.text()).toBe('Stop');
    stopButton.simulate('click');
    expect(onStop).toHaveBeenCalled();
  });

  describe('endTime', () => {
    describe('when undefined', () => {
      const endTime = undefined;

      it('prints default time', () => {
        const component = shallow(<MobTimer endTime={endTime} />);
        expect(component.find('p').text()).toBe('10:00');
      });
    });

    describe('when minutes consists of two digits', () => {
      const endTime = moment().add(timeUnits.TEN_MINUTES).unix();

      it('gets printed', () => {
        const component = shallow(<MobTimer endTime={endTime} />);
        expect(component.find('p').text()).toBe('10:00');
      });
    });

    describe('when minutes consists of one digit', () => {
      const endTime = moment().add(timeUnits.ONE_MINUTE).unix();

      it('gets prefixed with a zero', () => {
        const component = shallow(<MobTimer endTime={endTime} />);
        expect(component.find('p').text()).toBe('01:00');
      });
    });

    describe('when less than one minutes exists', () => {
      const endTime = moment().add(timeUnits.ONE_MINUTE).subtract(timeUnits.ONE_SECOND).unix();

      it('gets printed', () => {
        const component = shallow(<MobTimer endTime={endTime} />);
        expect(component.find('p').text()).toBe('00:59');
      });
    });
  });
});
