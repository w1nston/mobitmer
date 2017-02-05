import React, { Component } from 'react';
import moment from 'moment';
import { timeUnits } from '../actions/timerActions';

const padNumberWithStartingZero = number =>
  (number < 10) ? `0${number}` : number;

const calculateDuration = endTime => {
  if (endTime) {
    const diff = endTime - moment().unix();
    const duration = moment.duration(diff, 'seconds');
    const minutes = padNumberWithStartingZero(duration.minutes());
    const seconds = padNumberWithStartingZero(duration.seconds());
    return { minutes, seconds };
  }
  return {
    minutes: '10',
    seconds: '00',
  };
};

export default class MobTimer extends Component {
  componentDidMount() {
    this.timer = setInterval(this.forceUpdate.bind(this), timeUnits.ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { minutes, seconds } = calculateDuration(this.props.endTime);
    return (
      <div>
        <button onClick={this.props.onStart}>Start</button>
        <button onClick={this.props.onStop}>Stop</button>
        <p>{minutes}:{seconds}</p>
      </div>
    );
  }
}
