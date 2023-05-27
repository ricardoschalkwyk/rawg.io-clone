import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import Icon from "../Icon";

const Platforms = () => {
  const Option = [
    { name: "PC", icon: TvIcon },
    { name: "Platstation", icon: ArrowDownTrayIcon },
    { name: "Xbox", icon: InboxStackIcon },
  ];

  return (
    <div className="space-y-2">
      {Option.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin 2xl:text-2xl"
        >
          <Icon
            icon={item.icon}
            className="h-8 w-8 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
          />
          <div>{item.name}</div>
        </NavLink>
      ))}
      <Button className="className=text-md group flex w-full items-center gap-2 border-solid font-thin">
        <Icon
          icon={ChevronDownIcon}
          className="h-8 w-8 rounded-md bg-brand-gray/70 p-1 text-brand-light-text-gray duration-200 ease-in-out group-hover:bg-brand-light-text-gray group-hover:text-brand-dark"
        />
        <div className="text-brand-light-text-gray">Show All</div>
      </Button>
    </div>
  );
};

Platforms.propTypes = {};

export default Platforms;
