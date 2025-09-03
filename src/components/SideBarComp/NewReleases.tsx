import { useDispatch } from "react-redux";
import {
  CalendarIcon,
  FireIcon,
  ForwardIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";
import NavLink from "../NavLink";
import Icon from "../Icon";
import { GetResult } from "../../types";
import Api from "../../api";
import { setGames } from "../../store/games";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  query: string;
  url: string;
};

export default function NewReleases() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;

  const Options: Props[] = [
    {
      name: "Last 30 days",
      icon: StarIcon,
      query: "lists/recent-games-past?ordering=-added",
      url: "/discover/last-30-days"
    },
    {
      name: "This week",
      icon: FireIcon,
      query: "lists/recent-games?ordering=-added",
      url: "/discover/this-week"
    },
    {
      name: "Next week",
      icon: ForwardIcon,
      query: "lists/recent-games-future?ordering=-added",
      url: "/discover/next-week"
    },
    {
      name: "Release calender",
      icon: CalendarIcon,
      query: `calendar/${currentYear}/${currentMonth}?ordering=released`,
      url: "/video-game-releases"
    },
  ];

  const handleDates = async (item: Props) => {
    try {
      // Get input for the search
      const { results, count } = await Api.get<GetResult>(
        `/games/${item.query}&page_size=40&page=1`
      );

      dispatch(setGames({ results, count }));
      navigate(item.url, { state: { query: item.query } })
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
          className={clsx("group flex w-full items-center gap-2 border-solid text-lg font-thin",
            item.url === "/video-game-releases" && "pointer-events-none text-gray-500/30"
          )}
          onClick={() => handleDates(item)}
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

NewReleases.propTypes = {};


