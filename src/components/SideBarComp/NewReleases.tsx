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

type Props = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  query: string;
};

const NewReleases = () => {
  const dispatch = useDispatch();

  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;

  const Options: Props[] = [
    {
      name: "Last 30 days",
      icon: StarIcon,
      query: "lists/recent-games-past?ordering=-added",
    },
    {
      name: "This week",
      icon: FireIcon,
      query: "lists/recent-games?ordering=-added",
    },
    {
      name: "Next week",
      icon: ForwardIcon,
      query: "lists/recent-games-future?ordering=-added",
    },
    {
      name: "Release calender",
      icon: CalendarIcon,
      query: `calendar/${currentYear}/${currentMonth}?ordering=released`,
    },
  ];

  const handleDates = async (item: Props) => {
    try {
      // Get input for the search
      const { results, count } = await Api.get<GetResult>(
        `/games/${item.query}&page=1&page_size=300&`
      );

      dispatch(setGames({ results, count }));
    } catch (error) {
      alert("Item not found");
    }
  };

  return (
    <div className="space-y-2">
      {Options.map((item, index) => (
        <NavLink
          to={""}
          key={index}
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin 2xl:text-2xl"
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

export default NewReleases;
