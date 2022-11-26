import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Api from "../api";
import Button from "../components/Button";
import GameCard from "../components/GameComp/GameCard";
import { Game, GetResult } from "../types";

interface Columns {
  results: Game[];
}

const HomePage = () => {
  const [columns, setColumns] = useState<Columns[]>([
    {
      results: [],
    },
    {
      results: [],
    },
    {
      results: [],
    },
    {
      results: [],
    },
  ]);

  const getGames = async () => {
    const { results } = await Api.get<GetResult>("");

    console.log("🚀 ~ getGames ~ results", results);

    setColumns(
      columns.map((column, index) => {
        const numberThing = Math.ceil(results.length / 4);

        console.log("🚀 ~ columns.map ~ numberThing", numberThing);

        return {
          results: results.slice(
            index * numberThing,
            index * numberThing + numberThing
          ),
        };
      })
    );
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-16">
        <div className="text-7xl font-bold">New and Trending</div>
        <div>Based on player count and release date</div>
      </div>

      <div className="flex items-center justify-between">
        {/* Selector boxes */}
        <div className="mt-6 flex w-full gap-3">
          <select className="appearance-none rounded-md bg-brand-dark py-2 pl-3 pr-10 outline-none">
            <option value="1">Order by: Relevance</option>
            <option value="1">option1</option>
            <option value="1">option1</option>
          </select>

          <select className="appearance-none rounded-md bg-brand-dark py-2 pl-3 pr-16 outline-none">
            <option value="1">Platform</option>
            <option value="1">option1</option>
            <option value="1">option1</option>
          </select>
        </div>

        {/* Select display */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">Display_options:</div>
          <div className="ml-4 flex gap-2">
            <Button className="bg-brand-dark py-3 px-4 hover:bg-brand-gray">
              {<Bars3Icon className="h-4 w-4" />}
            </Button>
            <Button className="bg-brand-dark py-3 px-4 hover:bg-brand-gray">
              B
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-4 items-start gap-6">
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

HomePage.propTypes = {};

export default HomePage;
