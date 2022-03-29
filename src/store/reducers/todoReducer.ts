import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: '',
      category: '',
      todos: [
        // {
        //   id: '',
        //   title: '',
        //   description: '',
        //   date: '',
        //   note: '',
        //   isFinished: false,
        //   bg: '',
        // },
      ],
    },
  ],
};

/** Returns a reducer slice and the actions, all in one place.
 * https://redux-toolkit.js.org/tutorials/basic-tutorial
 * */
const todoReducer = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      console.log('>> TODO REDUCER PAYLOAD: ', action?.payload);
      // Loop through the categories, check to which category a todo
      // needs to be added. Upon finding the right category, push the todo.
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i] === action.payload.catId) {
          state.categories[i].todos.push(action.payload.todo);
        }
      }
    },
    setFinished(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i] === action.payload.catId) {
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
      console.log('>>> ACTION PAYLOAD CAT: ', action.payload);
      // TODO: action.payload = {id: 'uuid', category: 'cat_name', todos: []}
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      state.categories.push(action.payload);
    },
  },
});

/** Redux community code convention called the "ducks".
 * it suggests that you should put all your action creators and reducers in one file,
 * do named exports of the action creators, and a default export of the reducer function.
 * https://redux-toolkit.js.org/tutorials/intermediate-tutorial
 * */
export const {addTodo, setFinished, addCategory} = todoReducer.actions;

export default todoReducer.reducer;
