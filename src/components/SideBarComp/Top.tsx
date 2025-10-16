import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Api from "../../api";
import { setGames } from "../../store/games";
import { GetResult } from "../../types";
import Icon from "../Icon";
import NavLink from "../NavLink";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  query: string;
  url: string;
};

const Options: Props[] = [
  {
    name: "Best of the year",
    icon: TrophyIcon,
    query: "lists/greatest?ordering=-added",
    url: "/discover/best-of-the-year",
  },
  {
    name: "Popular in 2024",
    icon: ChartBarIcon,
    query: "lists/greatest?year=2024",
    url: "/discover/popular-in-2024",
  },
  {
    name: "All time best",
    icon: GlobeAltIcon,
    query: "lists/popular?discover=true&",
    url: "/discover/all-time-top",
  },
];

export default function Top() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFetch = async (item: Props) => {
    try {
      // Get input for the search
      const { results, count } = await Api.get<GetResult>(
        `/games/${item.query}&page_size=40&page=1`
      );

      dispatch(setGames({ results, count }));
      navigate(item.url, { state: { query: item.query } });
    } catch (error) {
      console.log("Item not found");
    }
  };

  return (
    <div className="space-y-2">
      {Options.map((item, index) => (
        <NavLink
          to={item.url}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin"
          onClick={() => handleFetch(item)}
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
}
