import { connect } from 'react-redux';
import MobsterList from '../components/mobsterList';
import { getListOfMobsters } from '../reducers/mobsterListReducer';

const mapStateToProps = state => ({
  mobsters: getListOfMobsters(state),
});

export default connect(mapStateToProps)(MobsterList);
