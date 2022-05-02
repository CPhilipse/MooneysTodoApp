import {connect} from 'react-redux';
import Drawer from './Drawer';
import {logout} from '../../store/reducers/userReducer';
import {RootState} from '../../store/reducers';
import {clearAllTodos} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {email} = state.user;
  return {
    email: email.split('@')[0],
  };
};

const mapDispatchToProps = {
  logout,
  clearAllTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
