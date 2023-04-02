import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";

const GameScreenshots = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="relative rounded-md bg-gray-300 px-44 py-24">
        <div>video 1</div>
        <Button className="absolute right-0 bottom-0 m-3 flex items-center gap-2 rounded-sm bg-brand-dark bg-opacity-50 p-1 px-2 text-xs font-normal text-brand-white">
          <FontAwesomeIcon
            className="h-5 w-5 text-brand-white"
            icon={faYoutube}
          />
          Play full video
        </Button>
      </div>

      {/* Preview Images */}
      <div className="mt-4 grid shrink-0 grid-cols-2 gap-5">
        <div className="rounded-md bg-gray-300 px-16 py-10">image 1</div>
        <div className="rounded-md bg-gray-300">image 2</div>
        <div className="rounded-md bg-gray-300 px-16 py-10">image 3</div>
        <div className="rounded-md bg-gray-300 ">image 4</div>
      </div>
    </div>
  );
};

GameScreenshots.propTypes = {};

export default GameScreenshots;
