import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  button: false,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    gameActive: (state, action) => {
      state.button = true;
    },
  },
});

export const { gameActive } = gamesSlice.actions;

export default gamesSlice.reducer;
