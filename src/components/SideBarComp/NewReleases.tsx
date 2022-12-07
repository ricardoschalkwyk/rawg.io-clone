import Button from "../Button";
import { FireIcon, ForwardIcon, StarIcon } from "@heroicons/react/24/solid";

const NewReleases = () => {
  return (
    <div className="space-y-2">
      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <StarIcon className="h-7 w-7 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Last 30 days</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <FireIcon className="h-7 w-7 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>This week</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <ForwardIcon className="h-7 w-7 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Next week</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-gray p-0.5 font-bold duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray">
          31
        </div>
        <div>Release calender</div>
      </Button>
    </div>
  );
};

NewReleases.propTypes = {};

export default NewReleases;
