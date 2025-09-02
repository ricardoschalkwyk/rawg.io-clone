import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Api from "../../../api";

import GameScreenshots from "./GameScreenshots";
import GameDetails from "./GameDetails";

import { GameDetail, Root, RootTrailer } from "../../../types";
import { setGame, setGamesNull, setScreenShots } from "../../../store/games";
import { RootState } from "../../../store";
import NavLink from "../../NavLink";

const GameSelected = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const game = useSelector((state: RootState) => state.games.gameData);
  const screenShots = useSelector(
    (state: RootState) => state.games.screenshots
  );

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
      const images = await Api.get<Root>(
        `/games/${id}/screenshots?page_size=5`
      );

      console.log(images.results);

      dispatch(setScreenShots(images.results));
      console.log("🚀 ~ getGames ~ images", images);
    } catch (error) {
      alert("Item not found");
    }
  };

  useEffect(() => {
    handleData();
    handleScreenshots();
    dispatch(setGamesNull());
  }, [id]);

  if (!game) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:items-start">
      <div className="w-full">
        <GameDetails game={game} />
      </div>

      {screenShots ? (
        <div className="w-full max-w-sm">
          <GameScreenshots screenShots={screenShots} game={game} />
        </div>
      ) : null}
    </div>
  );
};

export default GameSelected;
