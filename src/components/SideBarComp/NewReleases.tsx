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

  const Date = moment().subtract(20, "days").calendar().toString();
  const dateFormat = moment(Date).format("YYYY-MM-d");

  console.log(dateFormat);
  const Options: Props[] = [
    { name: "Last 30 days", icon: StarIcon, query: dateFormat },
    { name: "This week", icon: FireIcon, query: "ebeans" },
    { name: "Next week", icon: ForwardIcon, query: "ebeans" },
    { name: "Release calender", icon: CalendarIcon, query: "ebeans" },
  ];

  const handleDates = async (option: Props) => {
    try {
      // Get input for the search
      const { results } = await Api.get<GetResult>(
        `/games?page=1&page_size=300&ordering=${option}`
      );

      dispatch(setGames(results));
      console.log("🚀 ~ getGames ~ results", results);
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
          className="group flex w-full items-center gap-2 border-solid text-lg font-thin"
          onClick={() => handleDates(item.query)}
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
