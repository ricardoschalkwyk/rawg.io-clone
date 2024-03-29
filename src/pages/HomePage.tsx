import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { Bars3Icon } from "@heroicons/react/24/solid";

import Api from "../api";

import { GetResult } from "../types";
import { RootState } from "../store";
import { setGameNull, setGames } from "../store/games";

import Button from "../components/Button";
import GameCard from "../components/GameComp/GameCard";
import FilterDiv from "../components/Filters/FilterDiv";

const HomePage = () => {
  const { columns } = useSelector((state: RootState) => state.games);

  const [params, setParams] = useSearchParams();

  const dispatch = useDispatch();

  const getGames = async () => {
    const { results, count } = await Api.get<GetResult>(
      "/games?page=1&page_size=300"
    );

    dispatch(setGames({ results, count }));
  };

  useEffect(() => {
    getGames();
    dispatch(setGameNull());
  }, []);

  return (
    <div>
      <div className="mt-10 text-center md:text-start">
        <div className="text-4xl font-bold md:text-7xl">New and trending</div>
        <div className="mt-2">Based on player count and release date</div>
      </div>

      <div className="flex items-center justify-between">
        {/* Order selector boxes */}
        <div className="mt-6 flex w-full gap-3">
          <FilterDiv />
        </div>

        {/* Select display */}
        <div className="mt-6 hidden items-center gap-1 lg:flex">
          <div className="flex items-center gap-1 text-sm text-brand-scorpion-gray">
            <span>Display</span>
            <span>options:</span>
          </div>
          <div className="ml-4 flex gap-2">
            <Button
              onClick={() => setParams({ page: "1" })}
              className="bg-brand-dark py-3 px-4 hover:bg-brand-gray"
            >
              <Bars3Icon className="h-4 w-4" />
            </Button>
            <Button className="bg-brand-dark py-3 px-4 hover:bg-brand-gray">
              <FontAwesomeIcon icon={faNetworkWired} />
            </Button>
          </div>
        </div>
      </div>

      {/* GameCards */}
      <div className="mt-8 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-6">
            {column.results.map((game, gIndex) => (
              <GameCard key={game.id} game={game} index={gIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
