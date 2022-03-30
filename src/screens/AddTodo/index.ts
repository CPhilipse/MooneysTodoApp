import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {RootState} from '../../store/reducers';
import {addTodo} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {categories} = state.todos;
  return {
    categories,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
