import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../types/data';

type State = {
  categories: Category[];
};

const initialState: State = {
  categories: [],
};

/** Returns a reducer slice and the actions, all in one place.
 * https://redux-toolkit.js.org/tutorials/basic-tutorial
 * */
const todoReducer = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i].id === action.payload.catId) {
          state.categories[i].todos.unshift(action.payload.todo);
        }
      }
    },
    updateTodo(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i].id === action.payload.catId) {
          const foundIndex = state.categories[i].todos.findIndex(
            todo => todo.id === action.payload.todoId,
          );
          state.categories[i].todos[foundIndex] = action.payload.updatedTodo;
        }
      }
    },
    removeTodo(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i].id === action.payload.catId) {
          for (let j = 0; j < state.categories[i].todos.length; j++) {
            if (state.categories[i].todos[j].id === action.payload.todoId) {
              state.categories[i].todos = state.categories[i].todos.filter(
                ({id}) => id !== action.payload.todoId,
              );
            }
          }
        }
      }
    },
    setFinished(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i].id === action.payload.catId) {
          for (let j = 0; j < state.categories[i].todos.length; j++) {
            if (state.categories[i].todos[j].id === action.payload.todoId) {
              state.categories[i].todos[j].isFinished =
                !state.categories[i].todos[j].isFinished;
            }
          }
        }
      }
    },
    addCategory(state, action) {
      state.categories.unshift(action.payload);
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter(
        ({id}) => id !== action.payload,
      );
    },
    clearAllTodos(state) {
      state.categories = [];
    },
  },
});

/** Redux community code convention called the "ducks".
 * it suggests that you should put all your action creators and reducers in one file,
 * do named exports of the action creators, and a default export of the reducer function.
 * https://redux-toolkit.js.org/tutorials/intermediate-tutorial
 * */
export const {
  addTodo,
  setFinished,
  addCategory,
  removeCategory,
  removeTodo,
  updateTodo,
  clearAllTodos,
} = todoReducer.actions;

export default todoReducer.reducer;
