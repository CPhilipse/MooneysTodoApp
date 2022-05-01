import {connect} from 'react-redux';
import Login from './Login';
import {login} from '../../store/reducers/userReducer';

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
