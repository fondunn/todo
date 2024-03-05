import { configureStore } from "@reduxjs/toolkit"

import { combineReducers } from "redux"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import filterReducer from "./filter/filterSlice"
import modalReducer from "./modal/modalSlice"
import todoReducer from "./todo/todoSlice"

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
  modal: modalReducer,
})

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["filter", "modal"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
