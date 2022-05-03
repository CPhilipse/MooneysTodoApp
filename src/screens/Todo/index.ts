import {connect} from 'react-redux';
import Todo from './Todo';
import {removeTodo, updateTodo} from '../../store/reducers/todoReducer';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  const {id: userId} = state.user;
  return {
    userId,
  };
};

const mapDispatchToProps = {
  removeTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
