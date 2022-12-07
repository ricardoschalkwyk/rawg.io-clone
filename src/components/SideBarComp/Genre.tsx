import Button from "../Button";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

const Genre = () => {
  return (
    <div className="space-y-2">
      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <TvIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Action</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <ArrowDownTrayIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Strategy</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <InboxStackIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>RPG</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin opacity-30">
        <ChevronDownIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Show All</div>
      </Button>
    </div>
  );
};

Genre.propTypes = {};

export default Genre;
