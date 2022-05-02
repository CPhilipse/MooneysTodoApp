import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {RootState} from '../../store/reducers';
import {addTodo} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {categories} = state.todos;
  const {id} = state.user;
  return {
    categories,
    userId: id,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
