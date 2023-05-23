import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ChatBubbleOvalLeftIcon,
  PlusIcon,
  StopIcon,
} from "@heroicons/react/24/solid";

import Button from "../../Button";

const GameDetails = ({ game }: any) => {
  return (
    <div>
      <div className="mt-8 flex ">
        <div className="text-xs font-light uppercase text-brand-light-gray">
          Home / Games / Game Name
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-md border-2 bg-brand-white px-2 text-xs font-thin text-brand-black">
          OCT 20, 2022
        </div>
        <div>
          <h1>platforms</h1>
        </div>
        <div>
          <span className="text-xs font-light">AVERAGE PLAYTIME: 9 HOURS</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-7xl font-bold">{game.name}</div>
      </div>

      {/* My Games / wishlist / collection */}
      <div className="mt-6 flex gap-2">
        {/* Add To My Games */}
        <Button className="rounded-md border-2 bg-brand-white pl-3 pr-16 text-brand-dark">
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
        <Button className="rounded-md border-2 border-zinc-100 py-1 px-3 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Add to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Wishlist 42</h4>
          </div>
        </Button>

        {/* Save To Collection */}
        <Button className="rounded-md border-2 border-zinc-100 py-1 px-3 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Save to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Collection</h4>
          </div>
        </Button>
      </div>

      {/* Ratings */}
      <div className="divide mt-6 flex items-center gap-2 divide-x-2 divide-brand-light-gray">
        {/* Recommendation */}
        <div className="flex flex-col pr-10">
          <h1 className="text-2xl font-bold">Recommended</h1>
          <span className="text-sm font-light text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
            000 Ratings
          </span>
        </div>

        {/* Rating In Category */}
        <div className="flex flex-col pl-6 pr-3">
          <span className="text-4xl font-bold">#304</span>
          <span className="text-sm font-light uppercase text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
            Shooter
          </span>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col pl-6">
          <span className="text-4xl font-bold">#16</span>
          <span className="text-sm font-light uppercase text-brand-light-gray underline underline-offset-auto transition-all duration-200 hover:text-gray-200">
            Top 2022
          </span>
        </div>
      </div>

      {/* Color ratings */}
      <div className="mt-10 flex flex-col justify-between">
        {/* Colour blocks */}
        <div className="flex w-full rounded-md">
          <div className="w-full rounded-l-md bg-gradient-to-b from-rating-green-light to-rating-green-dark py-3 hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]">
            green
          </div>
          <div className="w-full bg-gradient-to-b from-rating-blue-light to-rating-blue-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]">
            blue
          </div>
          <div className="w-full bg-gradient-to-b from-rating-orange-light to-rating-orange-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]">
            orange
          </div>
          <div className="w-full rounded-r-md bg-gradient-to-b from-rating-red-light to-rating-red-dark hover:shadow-[1px_0px_9px_0px_rgb(300,300,300,300)]">
            red
          </div>
        </div>

        {/* Click colour rating */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex gap-2 rounded-full px-4 py-1 ring-brand-light-gray hover:ring-2">
            <StopIcon className="w-4 text-green-400" />
            <span>Exceptional</span>
          </div>
          <div className="flex gap-2 rounded-full px-4 py-1 ring-brand-light-gray hover:ring-2">
            <StopIcon className="w-4 text-blue-400" />
            <span>Recommended</span>
          </div>
          <div className="flex gap-2 rounded-full px-4 py-1 ring-brand-light-gray hover:ring-2">
            <StopIcon className="w-4 text-orange-400" />
            <span>Meh</span>
          </div>
          <div className="flex gap-2 rounded-full px-4 py-1 ring-brand-light-gray hover:ring-2">
            <StopIcon className="w-4 text-red-400" />
            <span>Skip</span>
          </div>
        </div>
      </div>

      {/* Commenting */}
      <div className="mt-8 flex items-center gap-5">
        <div className="flex items-center gap-3 rounded-md bg-brand-gray py-3 px-6 text-brand-text-gray transition-all duration-300 hover:bg-brand-white hover:text-brand-gray">
          <PlusIcon className="w-6 font-bold" />
          <span>Write a review 97</span>
        </div>

        <div className="flex items-center gap-3 rounded-md bg-brand-gray py-3 px-6 text-brand-text-gray transition-all duration-300 hover:bg-brand-white hover:text-brand-gray">
          <ChatBubbleOvalLeftIcon className="w-6" />
          <span>Write a comment</span>
        </div>
      </div>

      {/* About */}
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-xl font-bold">About</h1>
        <p>{game.description_raw}</p>
      </div>
    </div>
  );
};

export default GameDetails;
