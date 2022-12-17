import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const GameDetails = () => {
  return (
    <div>
      <div className="mt-8 flex ">
        <div>games route</div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-md border-2 bg-brand-white px-2 text-xs font-thin text-brand-black">
          OCT 20, 2022
        </div>
        <div>platforms</div>
        <div>AVERAGE PLAYTIME: 9 HOURS</div>
      </div>

      <div className="mt-3">
        <div className="text-7xl font-bold">Game</div>
        <div className="text-7xl font-bold">Namesssss</div>
      </div>

      {/* Rating / wishlist / collection */}
      <div className="mt-6 flex gap-2">
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

        <Button className="rounded-md border-2 border-zinc-100 py-1 px-3 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Add to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Wishlist 42</h4>
          </div>
        </Button>

        <Button className="rounded-md border-2 border-zinc-100 py-1 px-3 text-brand-dark duration-300 hover:border-brand-light-gray">
          <span className="flex justify-start text-xs text-brand-light-gray">
            Save to
          </span>
          <div className="flex items-center gap-3">
            <h4 className="text-brand-white">Collection</h4>
          </div>
        </Button>
      </div>
    </div>
  );
};

GameDetails.propTypes = {};

export default GameDetails;
