import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//using redux persisite ---------------------------------
const rootReducer = combineReducers({
  user: userReducer,
});

const persisiteConfig = {
  key: "root",
  storage,
  version: 1,
};

const persisitedReducer = persistReducer(persisiteConfig, rootReducer);
// -----------------------------------------------------------

export const store = configureStore({
  reducer: persisitedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
