import { createSlice } from "@reduxjs/toolkit";
import { Game, GameDetail, Root } from "../../types";

interface GameState {
  data: Game[];
  count: number;
  gameData?: GameDetail | null;
  screenshots?: Root[];
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
  count: 0,
  data: [],
  screenshots: [],
  gameData: null,
  button: false,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.data = action.payload.results;
      state.count = action.payload.count;
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
    gameActive: (state) => {
      state.button = true;
    },
    setGame: (state, action) => {
      state.gameData = action.payload;
    },
    setScreenShots: (state, action) => {
      state.screenshots = action.payload;
    },
    setGameNull: (state) => {
      state.gameData = null;
    },
  },
});

export const { gameActive, setGames, setGame, setGameNull, setScreenShots } =
  gamesSlice.actions;

export default gamesSlice.reducer;
