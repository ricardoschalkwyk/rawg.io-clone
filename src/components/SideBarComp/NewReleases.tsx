import Button from "../Button";
import { FireIcon, ForwardIcon, StarIcon } from "@heroicons/react/24/solid";

const NewReleases = () => {
  return (
    <div className="space-y-1.5">
      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <StarIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
        <div>Last 30 days</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <FireIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
        <div>This week</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <ForwardIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
        <div>Next week</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-rawg-gray p-0.5 font-bold">
          31
        </div>
        <div>Release calender</div>
      </Button>
    </div>
  );
};

NewReleases.propTypes = {};

export default NewReleases;
