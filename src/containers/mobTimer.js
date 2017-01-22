import { connect } from 'react-redux';
import MobTimer from '../components/mobTimer';

const mapDispatchToProps = dispatch => ({
  onStart() {
    // TODO: Start timer
  }
});

export default connect(null, mapDispatchToProps)(MobTimer);
