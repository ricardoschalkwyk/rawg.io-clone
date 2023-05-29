import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Api from "../../../api";

import GameScreenshots from "./GameScreenshots";
import GameDetails from "./GameDetails";

import { GameDetail } from "../../../types";
import { setGame, setScreenShots } from "../../../store/games";
import { RootState } from "../../../store";

const GameSelected = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const game = useSelector((state: RootState) => state.games.gameData);
  const screenShot = useSelector((state: RootState) => state.games.screenshots);

  const handleData = async () => {
    try {
      const results = await Api.get<GameDetail>(`/games/${id}`);

      dispatch(setGame(results));
      console.log("🚀 ~ getGames ~ results", results);
    } catch (error) {
      alert("Item not found");
    }
  };

  const handleScreenshots = async () => {
    try {
      const results = await Api.get<GameDetail>(
        `/games/${id}/screenshots?page_size=5`
      );

      dispatch(setScreenShots(results));
      console.log("🚀 ~ getGames ~ results", results);
    } catch (error) {
      alert("Item not found");
    }
  };

  useEffect(() => {
    handleData();
    handleScreenshots();
  }, []);

  if (!game) {
    return null;
  }

  return (
    <div className=" mt-6 flex gap-12">
      <div>
        <GameDetails game={game} />
      </div>
      <div>
        <GameScreenshots />
      </div>
    </div>
  );
};

export default GameSelected;
