import { connect } from 'react-redux';
import MobTimer from '../components/mobTimer';

const mapDispatchToProps = dispatch => ({
  onStart() {
    // TODO
  }
});

export default connect(null, mapDispatchToProps)(MobTimer);
