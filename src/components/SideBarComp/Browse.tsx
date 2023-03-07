import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";
import NavLink from "../NavLink";
import Icon from "../Icon";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Browse = () => {
  const Options: Props[] = [
    { name: "Platforms", icon: TvIcon },
    { name: "Store", icon: ArrowDownTrayIcon },
    { name: "Collection", icon: InboxStackIcon },
    { name: "Show All", icon: ChevronDownIcon },
  ];

  return (
    <div className="space-y-2">
      {Options.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="text-md group flex w-full items-center gap-2 border-solid font-thin"
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

Browse.propTypes = {};

export default Browse;
