import {
  CalendarIcon,
  FireIcon,
  ForwardIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import NavLink from "../NavLink";
import Icon from "../Icon";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const NewReleases = () => {
  const Options: Props[] = [
    { name: "Last 30 days", icon: StarIcon },
    { name: "This week", icon: FireIcon },
    { name: "Next week", icon: ForwardIcon },
    { name: "Release calender", icon: CalendarIcon },
  ];

  return (
    <div className="space-y-2">
      {Options.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin"
        >
          <Icon
            icon={item.icon}
            className="h-8 w-8 rounded-md bg-brand-gray p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
          />
          <div>{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

NewReleases.propTypes = {};

export default NewReleases;
