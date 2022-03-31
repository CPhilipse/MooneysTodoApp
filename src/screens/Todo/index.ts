import {connect} from 'react-redux';
import Todo from './Todo';
import {removeTodo, updateTodo} from '../../store/reducers/todoReducer';

const mapDispatchToProps = {
  removeTodo,
  updateTodo,
};

export default connect(null, mapDispatchToProps)(Todo);
