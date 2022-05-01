import {connect} from 'react-redux';
import AddCategory from './AddCategory';
import {addCategory} from '../../store/reducers/todoReducer';
import {RootState} from '../../store/reducers';

const mapStateToProps = (state: RootState) => {
  const {id} = state.user;
  return {
    userId: id,
  };
};

const mapDispatchToProps = {
  addCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
