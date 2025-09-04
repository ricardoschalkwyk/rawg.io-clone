import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChatBubbleOvalLeftIcon,
  PlusIcon,
  StopIcon,
} from "@heroicons/react/24/solid";

import clsx from "clsx";
import { GameDetail } from "../../../types";
import Button from "../../Button";
import NavLink from "../../NavLink";

type Props = {
  game?: GameDetail;
};

const GameDetails = ({ game }: Props) => {
  if (!game) {
    return null;
  }

  return (
    <>
      <div className="mt-8 flex">
        <div className="text-xs font-light uppercase text-brand-light-gray">
          Home / Games / {game.name}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 md:flex-row md:items-start">
        <div className="flex items-center gap-2.5">
          <div className="rounded-md border-2 bg-brand-white px-2 text-xs font-thin text-brand-black">
            {game.released}
          </div>

          <div>
            <h1>platforms</h1>
          </div>
        </div>

        <div>
          <span className="text-xs font-light">
            AVERAGE PLAYTIME: {game.playtime} HOURS
          </span>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-3xl font-bold md:text-6xl">{game?.name}</div>
      </div>

      {/* My Games / wishlist / collection */}
      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {/* Add To My Games */}
        <Button className="rounded-md border-2 bg-brand-white pl-3 text-brand-dark md:pr-16">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Add to
          </span>

          <div className="flex items-center gap-3">
            <div>My games</div>

            <FontAwesomeIcon
              icon={faPlusCircle}
              className="h-8 w-8 text-green-500"
            />
          </div>
        </Button>

        {/* Add To Wishlist */}
        <Button className="rounded-md border-2 border-zinc-100 px-3 py-1 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Add to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Wishlist 42</h4>
          </div>
        </Button>

        {/* Save To Collection */}
        <Button className="rounded-md border-2 border-zinc-100 px-3 py-1 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Save to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Collection</h4>
          </div>
        </Button>
      </div>

      {/* Ratings */}
      <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-start md:divide-x-2 md:divide-brand-light-gray md:text-left">
        {/* Recommendation */}
        <div className="flex flex-col md:pr-10">
          <h1 className="text-2xl font-bold">Recommended</h1>

          <span className="text-sm font-light text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
            {game.ratings_count} Ratings
          </span>
        </div>

        <div className="flex gap-2 md:divide-x-2 md:divide-brand-light-gray">
          {/* Rating In Category */}
          <div className="flex flex-col pr-3 md:pl-6">
            <span className="text-2xl font-bold">#304</span>

            <span className="text-sm font-light uppercase text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
              Shooter
            </span>
          </div>

          {/* Overall Rating */}
          <div className="flex flex-col md:pl-6">
            <span className="text-2xl font-bold">#16</span>

            <span className="text-sm font-light uppercase text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
              Top 2022
            </span>
          </div>
        </div>
      </div>

      {/* Color ratings */}
      <div className="mt-10 flex flex-col 2xl:pr-80">
        {/* Colour blocks */}
        <div className="flex rounded-md">
          <div className="w-full max-w-xs rounded-l-md bg-linear-to-b from-rating-green-light to-rating-green-dark py-7 hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]" />
          <div className="w-full max-w-xs bg-linear-to-b from-rating-blue-light to-rating-blue-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]" />
          <div className="w-full max-w-xs bg-linear-to-b from-rating-orange-light to-rating-orange-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]" />
          <div className="w-full max-w-xs rounded-r-md bg-linear-to-b from-rating-red-light to-rating-red-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]" />
        </div>

        {/* Click colour rating */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {game.ratings.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2 text-sm">
                <StopIcon
                  className={clsx(
                    "w-4",
                    item.title === "exceptional"
                      ? "text-green-400"
                      : item.title === "recommended"
                        ? "text-blue-400"
                        : item.title === "meh"
                          ? "text-orange-400"
                          : item.title === "skip"
                            ? "text-red-400"
                            : ""
                  )}
                />
                <span className="font-bold capitalize">{item.title}</span>
                <span className="text-white/40">{item.count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commenting */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-5">
        <div className="flex w-full items-center justify-center gap-3 rounded-md bg-brand-gray px-6 py-3 text-brand-text-gray transition-all duration-300 hover:bg-brand-white hover:text-brand-gray">
          <PlusIcon className="w-6 font-bold" />
          <span>Write a review {game.reviews_count}</span>
        </div>

        <div className="flex w-full items-center justify-center gap-3 rounded-md bg-brand-gray px-6 py-3 text-brand-text-gray transition-all duration-300 hover:bg-brand-white hover:text-brand-gray">
          <ChatBubbleOvalLeftIcon className="w-6" />
          <span>Write a comment</span>
        </div>
      </div>

      {/* About */}
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-xl font-bold">About</h1>
        <p className="font-thin 2xl:pr-44">{game.description_raw}</p>
      </div>

      {/* Game info */}
      <div className="mt-10">
        <div className="grid w-full grid-cols-2">
          {game.platforms.length ? (
            <div>
              <h1 className="my-2 text-sm font-medium text-white/30">
                Platforms
              </h1>
              <div className="flex flex-wrap gap-1">
                {game.platforms.map((item) => (
                  <p
                    key={item.platform.id}
                    className="text-sm underline underline-offset-1"
                  >
                    {item.platform?.name},
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {game.metacritic ? (
            <div>
              <h1 className="my-2 text-sm font-medium text-white/30">
                Metascore
              </h1>
              <p className="text-sm text-green-400">{game.metacritic}</p>
            </div>
          ) : null}

          {game.genres.length ? (
            <div>
              <h1 className="my-2 text-sm font-medium text-white/30">Genres</h1>
              <div className="flex flex-wrap gap-1">
                {game.genres.map((item) => (
                  <p
                    key={item.id}
                    className="text-sm underline underline-offset-1"
                  >
                    {item?.name},
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {game.released ? (
            <div>
              <h1 className="my-2 text-sm font-medium text-white/30">
                Release date
              </h1>
              <p className="text-sm">{game.released}</p>
            </div>
          ) : null}

          <div>
            <h1 className="my-2 text-sm font-medium text-white/30">
              Developer
            </h1>
            <div className="flex flex-wrap gap-1">
              {game.developers.map((item) => (
                <p
                  key={item.id}
                  className="text-sm underline underline-offset-1"
                >
                  {item?.name},
                </p>
              ))}
            </div>
          </div>

          <div>
            <h1 className="my-2 text-sm font-medium text-white/30">
              Publisher
            </h1>
            <div className="flex flex-wrap gap-1">
              {game.publishers.map((item) => (
                <p
                  key={item.id}
                  className="text-sm underline underline-offset-1"
                >
                  {item?.name},
                </p>
              ))}
            </div>
          </div>

          <div>
            <h1 className="my-2 text-sm font-medium text-white/30">
              Age rating
            </h1>
            <p className="text-sm">
              {game.esrb_rating ? game.esrb_rating?.name : "Not rated"}
            </p>
          </div>
        </div>

        {game.tags.length ? (
          <div>
            <h1 className="my-2 text-sm font-medium text-white/30">Tags</h1>

            <div className="flex flex-wrap gap-1">
              {game.tags.map((item) => (
                <p
                  key={item.id}
                  className="text-sm underline underline-offset-1"
                >
                  {item?.name},
                </p>
              ))}
            </div>
          </div>
        ) : null}

        {game.website ? (
          <div>
            <h1 className="my-2 text-sm font-medium text-white/30">Website</h1>

            <NavLink
              to={game.website}
              className="text-sm underline underline-offset-1"
            >
              {game.website}
            </NavLink>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default GameDetails;
