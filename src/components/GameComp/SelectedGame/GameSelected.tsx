import { useEffect, useState } from "react";

import Api from "../../../api";

import GameScreenshots from "./GameScreenshots";
import GameDetails from "./GameDetails";

import { GetResult } from "../../../types";

const GameSelected = () => {
  const [game, setGame] = useState({});

  const handleData = async () => {
    try {
      // Get input for the search
      const results = await Api.getGame<GetResult>("");

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
      <GameScreenshots game={game} />
    </div>
  );
};

GameSelected.propTypes = {};

export default GameSelected;
