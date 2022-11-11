import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./games";

export const store = configureStore({
  reducer: { games: gamesReducer },
});
