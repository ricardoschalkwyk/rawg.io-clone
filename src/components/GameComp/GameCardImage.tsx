import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Game } from "../../types";
import Button from "../Button";

interface ImageDefaults {
  game?: Game;
  hover: Boolean;
}

const GameCardImage = ({ hover, game }: ImageDefaults) => {
  const getCropUrl = (url = "") => {
    const parts = url.split("/media/");

    return `${parts[0]}/media/crop/600/400/${parts[1]}`;
  };

  return (
    <div className="relative flex max-h-36 justify-center rounded-t-md bg-brand-dark text-brand-black">
      <div
        className="min-h-[144px] w-full rounded-t-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${getCropUrl(game?.background_image)})`,
        }}
      ></div>

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
        <div className="absolute left-4 bottom-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-brand-white">
          <FontAwesomeIcon
            className="relative -right-[1px] h-5 w-5 "
            icon={faPlay}
          />
        </div>
      )}
    </div>
  );
};

GameCardImage.propTypes = {};

export default GameCardImage;
