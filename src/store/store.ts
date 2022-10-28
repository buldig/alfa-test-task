import { configureStore, combineReducers } from "@reduxjs/toolkit";
import catReducer from "./reducers/CatSlice";

const rootReducer = combineReducers({
  catReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
