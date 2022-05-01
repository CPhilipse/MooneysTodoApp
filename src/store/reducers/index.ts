import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
