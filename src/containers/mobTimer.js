import { connect } from 'react-redux';
import moment from 'moment';
import MobTimer from '../components/mobTimer';
import { getEndTime } from '../reducers/timerReducer';
import { startTimer, stopTimer, timeUnits } from '../actions/timerActions';

const mapStateToProps = state => ({
  endTime: getEndTime(state),
});

const mapDispatchToProps = dispatch => ({
  onStart() {
    // get amount of time from state
    // if null/undefined set default value? here or state?
    const endTime = moment().add(timeUnits.TEN_MINUTES);
    dispatch(startTimer(endTime.unix()));
  },
  onStop() {
    // get end time stored in state
    // get time right now
    // if diff is > 0 save that diff
    dispatch(stopTimer());
  },
}); // mergeProps ?

export default connect(mapStateToProps, mapDispatchToProps)(MobTimer);
