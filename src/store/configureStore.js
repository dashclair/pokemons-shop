import { configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { reducers } from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
  });

  export const persistor = persistStore(store)