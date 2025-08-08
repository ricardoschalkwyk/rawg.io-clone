import Button from "../Button";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  InboxStackIcon,
  TvIcon,
} from "@heroicons/react/24/solid";
import Icon from "../Icon";
import NavLink from "../NavLink";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Genre = () => {
  const Options: Props[] = [
    { name: "Action", icon: TvIcon },
    { name: "Strategy", icon: ArrowDownTrayIcon },
    { name: "RPG", icon: InboxStackIcon },
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
            className="h-8 w-8 rounded-md bg-brand-side-dark p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
          />
          <div>{item.name}</div>
        </NavLink>
      ))}
      <Button className="className=text-md group flex w-full items-center gap-2 border-solid font-thin">
        <Icon
          icon={ChevronDownIcon}
          className="h-8 w-8 rounded-md bg-brand-side-dark p-1 text-brand-light-text-gray duration-200 ease-in-out group-hover:bg-brand-light-text-gray group-hover:text-brand-dark"
        />
        <div className="text-brand-light-text-gray">Show All</div>
      </Button>
    </div>
  );
};

Genre.propTypes = {};

export default Genre;
