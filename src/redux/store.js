import { configureStore } from '@reduxjs/toolkit';
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
import { createLogger } from 'redux-logger';
import contactsReducer from './contacts/contactsActionsSlice';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };

// {
//  contacts: {
//    data: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//    filter: '',
//   }
//  auth: {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//  },
// }
