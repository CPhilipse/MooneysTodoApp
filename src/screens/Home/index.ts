import {connect} from 'react-redux';
import Home from './Home';
import {RootState} from '../../store/reducers';
import {removeCategory, setFinished} from '../../store/reducers/todoReducer';

const mapStateToProps = (state: RootState) => {
  const {categories} = state.todos;
  const {id: userId} = state.user;
  return {
    categories,
    userId,
  };
};

const mapDispatchToProps = {
  removeCategory,
  setFinished,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
