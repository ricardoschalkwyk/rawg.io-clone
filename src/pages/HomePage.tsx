import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import GameCard from "../components/GameComp/GameCard";

const HomePage = () => {
  return (
    <div>
      <div className="mt-16">
        <div className="text-7xl font-bold">New and Trending</div>
        <div>Based on player count and release date</div>
      </div>

      <div className="flex items-center justify-between">
        {/* Selecter boxes */}
        <div className="mt-6 flex w-full gap-3">
          <select className="appearance-none rounded-md bg-rawg-dark py-2 pl-3 pr-10 outline-none">
            <option value="1">Order by: Relevance</option>
            <option value="1">option1</option>
            <option value="1">option1</option>
          </select>

          <select className="appearance-none rounded-md bg-rawg-dark py-2 pl-3 pr-16 outline-none">
            <option value="1">Platform</option>
            <option value="1">option1</option>
            <option value="1">option1</option>
          </select>
        </div>

        {/* Select display */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">Display_options:</div>
          <div className="ml-4 flex gap-2">
            <Button className="bg-rawg-dark py-3 px-4 hover:bg-rawg-gray">
              {<Bars3Icon className="h-4 w-4" />}
            </Button>
            <Button className="bg-rawg-dark py-3 px-4 hover:bg-rawg-gray">
              B
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-6">
        <Button className="">
          <GameCard />
        </Button>

        <Button className="">
          <GameCard />
        </Button>

        <Button className="">
          <GameCard />
        </Button>

        <Button className="">
          <GameCard />
        </Button>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
