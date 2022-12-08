import { faPlay, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameSelected = () => {
  return (
    <div className="ml-20">
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

      <div className="flex">
        <div className="text-7xl font-bold">Game Name</div>
      </div>

      {/* Rating / wishlist / collection */}
      <div className="flex gap-2">
        <div className="rounded-md border-2 bg-brand-white px-3 text-brand-dark">
          <span className="text-xs text-brand-light-gray">Add to</span>
          <div className="flex items-center gap-3">
            <h4>My games</h4>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="h-8 w-8 text-green-500"
            />
          </div>
        </div>
        <div className="border-2 bg-brand-white py-1 px-3 text-brand-dark">
          <span className="text-brand-light-gray">Add to</span>
          <div className="flex items-center gap-3">
            <h4>My games</h4>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="h-8 w-8 text-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GameSelected.propTypes = {};

export default GameSelected;
