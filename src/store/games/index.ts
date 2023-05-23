import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../../types";

interface GameState {
  data: Game[];
  gameData?: Game[];
  columns: Columns[];
  button: boolean;
}

interface Columns {
  results: Game[];
}

const initialState: GameState = {
  columns: [
    {
      results: [],
    },
    {
      results: [],
    },
    {
      results: [],
    },
    {
      results: [],
    },
  ],
  data: [],
  gameData: [],
  button: false,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.data = action.payload;
      state.columns = state.columns.map((column, index) => {
        const numberThing = Math.ceil(state.data.length / 4);

        return {
          results: state.data.slice(
            index * numberThing,
            index * numberThing + numberThing
          ),
        };
      });
    },

    gameActive: (state, action) => {
      state.button = true;
    },

    findGame: (state, action) => {
      state.gameData = action.payload;
    },
  },
});

export const { gameActive, setGames, findGame } = gamesSlice.actions;

export default gamesSlice.reducer;
