import { useEffect, useState } from "react";

import Api from "../../../api";

import GameScreenshots from "./GameScreenshots";
import GameDetails from "./GameDetails";

import { GetResult } from "../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const GameSelected = () => {
  const id = useSelector((state: RootState) => state.games.gameData);
  const [game, setGame] = useState({});

  const handleData = async () => {
    try {
      // Get input for the search
      const results = await Api.getGame<GetResult>(`${id}?key=`);

      setGame(results);
      console.log("🚀 ~ getGames ~ results", results);
    } catch (error) {
      alert("Item not found");
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="ml-20 mt-6 flex gap-12">
      <GameDetails game={game} />
      <GameScreenshots />
    </div>
  );
};

GameSelected.propTypes = {};

export default GameSelected;
