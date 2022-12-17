import Button from "../Button";
import {
  BarsArrowUpIcon,
  ChartBarIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div className="space-y-2">
      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <TrophyIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Best of the year</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <ChartBarIcon className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray" />
        <div>Popular in 2022</div>
      </Button>

      <Button className="group flex w-full items-center gap-2 border-solid text-lg font-thin">
        <FontAwesomeIcon
          icon={faCrown}
          className="h-7 w-7 rounded-md bg-brand-gray p-0.5 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
        />
        <div>All time best</div>
      </Button>
    </div>
  );
};

Top.propTypes = {};

export default Top;
