import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./games";

import filterReducer from "./filters";

export const store = configureStore({
  reducer: { games: gamesReducer, filters: filterReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
