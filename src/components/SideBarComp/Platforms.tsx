import Button from "../Button";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

const Platforms = () => {
  return (
    <div className="space-y-1.5">
      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <TvIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>PC</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <ArrowDownTrayIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Playstation</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <InboxStackIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Xbox</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin opacity-30">
        <ChevronDownIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Show All</div>
      </Button>
    </div>
  );
};

Platforms.propTypes = {};

export default Platforms;
