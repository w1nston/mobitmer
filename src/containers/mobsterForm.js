import { connect } from 'react-redux';
import { reset } from 'redux-form';
import MobsterForm, { FORM_NAME } from '../components/forms/mobsterForm';
import { addMobsterName } from '../actions/mobsterFormActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(values) {
    dispatch(reset(FORM_NAME));
    dispatch(addMobsterName(values.mobsterName));
  }
});

export default connect(null, mapDispatchToProps)(MobsterForm);
