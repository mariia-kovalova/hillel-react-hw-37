// import { configureStore } from '@reduxjs/toolkit';
// import todosReducer from './todoReducer';

// export const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//   },
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todoReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedTodosReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
