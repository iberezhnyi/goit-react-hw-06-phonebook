import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

// ================================================================

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// const reducer = {
//   contacts: persistedReducer,
//   filter: filterReducer,
// };

// export const store = configureStore({ reducer });
// export const persistor = persistStore(store);
