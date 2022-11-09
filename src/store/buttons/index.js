import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  button: false,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    // This action adds events to the data array
    buttonActive: (state, action) => {
      state.button = true;
    },
  },
});

export const { buttonActive } = eventsSlice.actions;

export default eventsSlice.reducer;
