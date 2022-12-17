import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  orderBy: [];
}

const initialState: FilterState = {
  orderBy: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setOrderByFilterOptions: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setOrderByFilterOptions } = filterSlice.actions;

export default filterSlice.reducer;
