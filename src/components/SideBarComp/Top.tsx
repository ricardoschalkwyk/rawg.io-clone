import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

import NavLink from "../NavLink";
import Icon from "../Icon";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
const Top = () => {
  const Options: Props[] = [
    { name: "Best of the year", icon: TrophyIcon },
    { name: "Popular in 2022", icon: ChartBarIcon },
    { name: "All time best", icon: GlobeAltIcon },
  ];

  return (
    <div className="space-y-2">
      {Options.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin 2xl:text-2xl"
        >
          <Icon
            icon={item.icon}
            className="h-8 w-8 rounded-md bg-brand-side-dark p-1 duration-200 ease-in-out group-hover:bg-brand-white group-hover:text-brand-gray"
          />
          <div>{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

Top.propTypes = {};

export default Top;
