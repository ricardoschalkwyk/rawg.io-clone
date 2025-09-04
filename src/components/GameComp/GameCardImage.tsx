import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import Api from "../../api";
import { Game, RootTrailer } from "../../types";
import Button from "../Button";
import { getCropUrl } from "../../utils";

interface ImageDefaults {
  game?: Game;
  hover: Boolean;
}

const GameCardImage = ({ hover, game }: ImageDefaults) => {
  const [trailer, setTrailer] = useState("");
  const [hasRequested, setHasRequested] = useState(false);

  const getGameTrailer = async () => {
    try {
      const result = await Api.get<RootTrailer>(`/games/${game?.id}/movies`);

      if (result) {
        setHasRequested(true);
      }

      if (result.results.length) {
        setTrailer(result.results[0].data["480"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (hover && !trailer && !hasRequested) {
      getGameTrailer();
    }
  }, [hover]);

  return (
    <div className="relative flex max-h-36 justify-center rounded-t-xl bg-brand-dark text-brand-black 2xl:max-h-64">
      {hover && trailer ? (
        <video
          className="min-h-[150px] w-full rounded-t-xl bg-cover bg-center 2xl:min-h-[240px]"
          autoPlay
          muted
          src={trailer}
        />
      ) : (
        <div
          className="min-h-[150px] w-full rounded-t-xl bg-cover bg-center 2xl:min-h-[240px]"
          style={{
            backgroundImage: `url(${getCropUrl(game?.background_image)})`,
          }}
        ></div>
      )}

      {hover && (
        <Button className="absolute bottom-0 right-0 m-2 flex items-center gap-2 bg-brand-dark bg-opacity-50 p-1 text-xs font-normal text-brand-white">
          <FontAwesomeIcon
            className="h-5 w-5 text-brand-white"
            icon={faYoutube}
          />
          Play full video
        </Button>
      )}

      {!hover && (
        <div className="absolute bottom-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-brand-white">
          <FontAwesomeIcon
            className="relative -right-px h-5 w-5 "
            icon={faPlay}
          />
        </div>
      )}
    </div>
  );
};

GameCardImage.propTypes = {};

export default GameCardImage;
