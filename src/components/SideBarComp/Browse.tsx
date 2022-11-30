import Button from "../Button";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

const Browse = () => {
  return (
    <div className="space-y-2">
      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <TvIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Platforms</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <ArrowDownTrayIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Store</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <InboxStackIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Collection</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin opacity-30">
        <ChevronDownIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Show All</div>
      </Button>
    </div>
  );
};

Browse.propTypes = {};

export default Browse;
