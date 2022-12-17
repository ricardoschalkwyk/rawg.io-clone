import GameDetails from "./GameDetails";
import GameScreenshots from "./GameScreenshots";

const GameSelected = () => {
  return (
    <div className="ml-20 flex gap-12">
      <GameDetails />
      <GameScreenshots />
    </div>
  );
};

GameSelected.propTypes = {};

export default GameSelected;
