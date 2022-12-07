import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { GetResult } from "../../types";
import Api from "../../api";

import NavItems from "./NavItems";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { setGames } from "../../store/games";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Navbar = () => {
  const games = useSelector((state: RootState) => state.games);
  // This state is used for the selection of how many results the user wants
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="mt-7 flex w-full items-center">
      <div className="mr-12 flex items-center text-xl font-bold uppercase text-brand-white">
        <h1>rawg</h1>
      </div>

      <div className="rounded-md bg-brand-white px-3 py-0.5 font-light text-brand-black">
        <h5>RateTopGames</h5>
      </div>

      {/* Search bar */}
      <div className="group relative mx-6 flex w-full items-center gap-2">
        <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 group-focus-within:text-brand-black group-hover:text-brand-black" />
        <form
          className="w-full"
          onSubmit={async (e) => {
            // Prevents page refresh onSubmit
            e.preventDefault();

            try {
              // Get input for the search
              const { results } = await Api.get<GetResult>(
                `&search=${userInput}`
              );

              dispatch(setGames(results));
              console.log("🚀 ~ getGames ~ results", results);
            } catch (error) {
              alert("Item not found");
            }
          }}
        >
          <Input
            className="w-full appearance-none rounded-full bg-brand-gray px-10 py-2.5 text-sm font-light text-brand-light-gray outline-none transition duration-150 ease-in-out focus:bg-brand-white group-hover:bg-brand-white group-hover:text-brand-black"
            type="text"
            placeholder={`Search ${games.data.length} games`}
            value={userInput}
            onChange={(e) => {
              setUserInput(e);
            }}
          />
        </form>
        <div className="absolute right-20 flex h-5 w-5 items-center gap-2 text-sm font-thin duration-1000 ease-in-out group-hover:hidden">
          <div className="rounded-sm px-1 text-brand-light-gray ring-1 ring-brand-light-gray ">
            <h6>alt</h6>
          </div>
          <span className="text-brand-light-gray">+</span>
          <div className="rounded-sm px-1 text-brand-light-gray ring-1 ring-brand-light-gray">
            <h6>enter</h6>
          </div>
        </div>
      </div>

      <NavItems />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
