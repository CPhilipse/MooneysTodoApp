import {connect} from 'react-redux';
import AddCategory from './AddCategory';
import {addCategory} from '../../store/reducers/todoReducer';

const mapDispatchToProps = {
  addCategory,
};

export default connect(null, mapDispatchToProps)(AddCategory);
