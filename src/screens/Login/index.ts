import {connect} from 'react-redux';
import Login from './Login';
import {login} from '../../store/reducers/userReducer';
import {addCategory, addTodo} from '../../store/reducers/todoReducer';

const mapDispatchToProps = {
  login,
  addCategory,
  addTodo,
};

export default connect(null, mapDispatchToProps)(Login);
