import {connect} from 'react-redux';
import Home from './Home';
import {RootState} from '../../store/reducers';
import {addCategory, removeCategory} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {categories} = state.todos;
  console.log('>>> PROPS: ', categories);
  return {
    categories,
  };
};

const mapDispatchToProps = {
  addCategory,
  removeCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
