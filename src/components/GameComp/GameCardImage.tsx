import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Game } from "../../types";
import Button from "../Button";

interface ImageDefaults {
  game?: Game;
  hover: Boolean;
}

const GameCardImage = ({ hover, game }: ImageDefaults) => {
  return (
    <div className="relative flex max-h-36 justify-center rounded-t-md bg-brand-white text-brand-black">
      <img
        src={game?.background_image}
        alt={game?.name}
        className="min-h-[144px] rounded-t-md object-cover"
      />
      {hover && (
        <Button className="absolute right-0 bottom-0 m-2 flex items-center gap-2 bg-brand-dark bg-opacity-50 p-1 text-xs font-normal text-brand-white">
          <FontAwesomeIcon
            className="h-5 w-5 text-brand-white"
            icon={faYoutube}
          />
          Play full video
        </Button>
      )}

      {!hover && (
        <FontAwesomeIcon
          className="absolute left-0 bottom-0 m-4 h-10 w-10 rounded-full bg-brand-white bg-opacity-60 text-brand-dark text-opacity-50"
          icon={faCirclePlay}
        />
      )}
    </div>
  );
};

GameCardImage.propTypes = {};

export default GameCardImage;
