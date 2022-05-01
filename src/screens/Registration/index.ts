import {connect} from 'react-redux';
import Registration from './Registration';
import {register} from '../../store/reducers/userReducer';

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Registration);
