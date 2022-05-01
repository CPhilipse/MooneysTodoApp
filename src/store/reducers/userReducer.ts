import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/data';

const initialState: User = {
  id: '',
  email: '',
  isLoggedIn: false,
};

/** Returns a reducer slice and the actions, all in one place.
 * https://redux-toolkit.js.org/tutorials/basic-tutorial
 * */
const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    register(state, action) {
      state.id = action.payload.user.userId;
      state.email = action.payload.user.email;
      state.isLoggedIn = action.payload.user.isLoggedIn;
    },
    login(state, action) {
      state.id = action.payload.user.userId;
      state.email = action.payload.user.email;
      state.isLoggedIn = action.payload.user.isLoggedIn;
    },
    logout(state) {
      state.id = '';
      state.email = '';
      state.isLoggedIn = false;
    },
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.id = action.payload.uid;
    },
  },
});

/** Redux community code convention called the "ducks".
 * it suggests that you should put all your action creators and reducers in one file,
 * do named exports of the action creators, and a default export of the reducer function.
 * https://redux-toolkit.js.org/tutorials/intermediate-tutorial
 * */
export const {register, login, logout, isLoggedIn} = userReducer.actions;

export default userReducer.reducer;
