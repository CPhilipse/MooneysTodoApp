import {connect} from 'react-redux';
import Todo from './Todo';
import {RootState} from '../../store/reducers';
import {addTodo} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {categories} = state.todos;
  console.log('>>> PROPS: ', categories);
  return {
    categories,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
