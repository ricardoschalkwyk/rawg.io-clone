import Button from "../Button";
import {
  BarsArrowUpIcon,
  ChartBarIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

const Top = () => {
  return (
    <div className="space-y-2">
      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <TrophyIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Best of the year</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <ChartBarIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>Popular in 2022</div>
      </Button>

      <Button className="flex items-center gap-2 border-solid text-lg font-thin">
        <BarsArrowUpIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5" />
        <div>All time best</div>
      </Button>
    </div>
  );
};

Top.propTypes = {};

export default Top;
