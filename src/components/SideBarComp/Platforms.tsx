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
    { name: "Show All", icon: ChevronDownIcon },
  ];
  return (
    <div className="space-y-2">
      {Option.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin"
        >
          <Icon
            icon={item.icon}
            className="h-7 w-7 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
          />
          <div>{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

Platforms.propTypes = {};

export default Platforms;
