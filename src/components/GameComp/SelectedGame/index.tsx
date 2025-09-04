import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Api from "../../../api";

import GameDetails from "./GameDetails";
import GameScreenshots from "./GameScreenshots";

import { RootState } from "../../../store";
import { setGame, setGamesNull, setScreenShots } from "../../../store/games";
import { GameDetail, Root } from "../../../types";
import { getCropUrl } from "../../../utils";

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
    } catch (error) {
      alert("Item not found");
    }
  };

  const handleScreenshots = async () => {
    try {
      const images = await Api.get<Root>(
        `/games/${id}/screenshots?page_size=5`
      );

      dispatch(setScreenShots(images.results));
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
      <div>
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
