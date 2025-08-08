import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Api from "../../api";

import { GetResult } from "../../types";

import { setGames } from "../../store/games";
import { RootState } from "../../store";

import NavItems from "./NavItems";
import Input from "../Input";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.games.count);
  const format = new Intl.NumberFormat().format(count);
  // This state is used for the selection of how many results the user wants
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="mt-7 flex items-center justify-between">
      <div className="flex shrink-0 items-center gap-1 pl-2 text-xl font-bold uppercase text-brand-white lg:mr-12 2xl:text-2xl">
        <a href="/">r a w g</a>
      </div>

      <div className="hidden rounded-md bg-brand-white px-3 py-0.5 font-light text-brand-black lg:block">
        <h5>RateTopGames</h5>
      </div>

      {/* Search bar */}
      <div className="group relative mx-6 flex w-56 items-center gap-2 md:w-full md:max-w-sm xl:max-w-2xl">
        <MagnifyingGlassIcon className="absolute left-3 h-4 w-4 font-bold group-focus-within:text-brand-black group-hover:text-brand-black 2xl:h-6 2xl:w-6" />
        <form
          className="w-full"
          onSubmit={async (e) => {
            // Prevents page refresh onSubmit
            e.preventDefault();

            try {
              // Get input for the search
              const { results, count } = await Api.get<GetResult>(
                `/games?page=1&page_size=300&search=${userInput}`
              );

              dispatch(setGames({ results, count }));
              console.log("🚀 ~ getGames ~ results", results);
            } catch (error) {
              alert("Item not found");
            }
          }}
        >
          <Input
            id="search"
            type="text"
            placeholder={`Search ${format} games`}
            className="w-full appearance-none rounded-full bg-brand-gray px-10 py-1.5 text-sm font-light text-brand-light-gray outline-none transition duration-150 ease-in-out focus:bg-brand-white group-hover:bg-brand-white group-hover:text-brand-black lg:py-2 2xl:py-3 2xl:text-lg"
            value={userInput}
            onChange={(e) => {
              setUserInput(e);
            }}
          />
        </form>

        <div className="absolute right-20 hidden h-5 w-5 text-sm font-thin duration-1000 ease-in-out group-hover:hidden sm:block">
          <div className="flex items-center gap-2">
            <div className="rounded-sm px-1 text-brand-light-gray ring-1 ring-brand-light-gray ">
              <h6>alt</h6>
            </div>
            <span className="text-brand-light-gray">+</span>
            <div className="rounded-sm px-1 text-brand-light-gray ring-1 ring-brand-light-gray">
              <h6>enter</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <NavItems />
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
