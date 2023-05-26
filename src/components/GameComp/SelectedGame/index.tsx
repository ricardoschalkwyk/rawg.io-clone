import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Api from "../../../api";

import GameScreenshots from "./GameScreenshots";
import GameDetails from "./GameDetails";

import { GameDetail } from "../../../types";
import { setGame } from "../../../store/games";
import { RootState } from "../../../store";

const GameSelected = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const game = useSelector((state: RootState) => state.games.gameData);

  // {} === {} <- by reference this never yields true
  // [] === [] <- by reference this never yields true
  // if ({} === {}) console.log('True');
  // if ([] === []) console.log('True');
  // const type = useSelector((state: RootState) => state.games.type, shallowEqual);

  const handleData = async () => {
    try {
      const results = await Api.get<GameDetail>(`/games/${id}`);

      dispatch(setGame(results));
      console.log("🚀 ~ getGames ~ results", results);
    } catch (error) {
      alert("Item not found");
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  if (!game) {
    return null;
  }

  return (
    <div className="ml-20 mt-6 flex gap-12">
      <GameDetails game={game} />
      <GameScreenshots />
    </div>
  );
};

export default GameSelected;
