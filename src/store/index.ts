import {compose, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: persistedReducer,
  devTools: composeEnhancers,
  middleware: getDefaultMiddleware({
    /** Ignore persist package, because it causes a common unneeded error.
     * https://github.com/rt2zz/redux-persist/issues/988
     * */
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

let persistor = persistStore(store);

export {store, persistor};
