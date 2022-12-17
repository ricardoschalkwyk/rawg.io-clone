import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEllipsis,
  faGift,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import { Game } from "../../types";
import Button from "../Button";
import GameCardImage from "./GameCardImage";
interface GameDefaults {
  title?: string;
  game?: Game;
  slug?: string;
  name?: string;
  released?: number;
  index?: number;
}

const GameCard = ({ game }: GameDefaults) => {
  const div = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (div.current) {
      setHeight(div.current.clientHeight);
    }
  }, []);

  if (!game) {
    return null;
  }

  return (
    <div
      ref={div}
      style={{ height: hover ? height + "px" : undefined }}
      className="group relative z-0 hover:z-10"
    >
      <div
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        style={{ position: hover ? "absolute" : "static" }}
        className="z-0 w-full rounded-md bg-brand-dark transition-transform duration-200 ease-in-out group-hover:z-10 group-hover:scale-105"
      >
        <div>
          {/* Game image */}
          {game.background_image && <GameCardImage game={game} hover={hover} />}

          {/* Icon display */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 text-sm">
                {game.parent_platforms.map((platform, index) => {
                  switch (platform.platform.name) {
                    case "PC":
                      return (
                        <FontAwesomeIcon
                          key={platform.platform.id}
                          icon={faWindows}
                        />
                      );
                    case "PlayStation":
                      return (
                        <FontAwesomeIcon
                          key={platform.platform.id}
                          icon={faPlaystation}
                        />
                      );

                    case "Xbox":
                      return (
                        <FontAwesomeIcon
                          key={platform.platform.id}
                          icon={faXbox}
                        />
                      );

                    default:
                      return null;
                  }
                })}
              </div>

              {/* Critic score */}
              {game.metacritic && (
                <div className="inline-flex rounded-md border border-solid border-brand-meta-green/40 py-1 px-1.5 text-sm font-bold leading-none text-brand-meta-green">
                  {game.metacritic}
                </div>
              )}
            </div>

            {/* Game title */}
            <div className="mb-2 flex justify-start pt-2 text-2xl font-bold uppercase">
              {game.name}
            </div>

            {/* Owned status */}
            <div className="flex gap-1">
              <Button className="flex items-center gap-1 rounded bg-brand-gray py-1 px-2 text-xs">
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
                {game?.added_by_status?.owned}
              </Button>

              {hover && (
                <div className="flex gap-1">
                  <Button className="flex items-center gap-1 rounded bg-brand-gray py-1 px-2 text-xs">
                    <FontAwesomeIcon icon={faGift} className="text-xs" />
                  </Button>
                  <Button className="flex items-center gap-1 rounded bg-brand-gray py-1 px-2 text-xs">
                    <FontAwesomeIcon icon={faEllipsis} className="text-base" />
                  </Button>
                </div>
              )}
            </div>

            {hover && (
              <div
                className={clsx(
                  hover &&
                    "mt-4 space-y-3 divide-y-0 divide-brand-scorpion-gray text-xs transition-opacity ease-in-out"
                )}
              >
                <div className="mt-4 space-y-3 divide-y divide-brand-scorpion-gray text-xs">
                  <div className="flex justify-between">
                    <div className="text-brand-scorpion-gray">
                      Release date:
                    </div>
                    <div>{game.released}</div>
                  </div>

                  <div className="flex justify-between pt-2.5">
                    <div className="text-brand-scorpion-gray">Genre:</div>
                    <div>
                      {game.genres.map((genre, index) => (
                        <a href="" key={index} className="underline">
                          {genre.name}
                          {index !== game.genres.length - 1 ? ", " : null}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2.5">
                    <div className="text-brand-scorpion-gray">Chart:</div>
                    <div>
                      #{game.rating_top} Top{" "}
                      {format(new Date(game.released), "yyyy")}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button className="flex w-full items-center justify-between bg-brand-gray px-3 py-2.5 text-sm font-light">
                    <span>Show more like this</span>

                    <FontAwesomeIcon
                      className="h-5 w-5 text-brand-scorpion-gray"
                      icon={faChevronRight}
                    />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {};

export default GameCard;
