import PropTypes from "prop-types";
import Button from "../Button";
import NavItems from "./NavItems";
import Input from "../Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="mt-7 flex w-full items-center">
      <div className="flex items-center pr-12 text-xl font-bold uppercase text-brand-white">
        rawg
      </div>

      <div className="rounded-md bg-brand-white px-4 py-0.5 font-light text-brand-black">
        RateTopGames
      </div>

      {/* Search bar */}
      <div className="group relative mx-6 flex w-full items-center gap-2">
        <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 group-focus-within:text-brand-black group-hover:text-brand-black" />
        <Input
          type="search"
          placeholder="Search from our selection of games"
          className="w-full appearance-none rounded-full bg-brand-gray px-10 py-2.5 text-black outline-none transition duration-150 ease-in-out focus:bg-brand-white group-hover:bg-brand-white group-hover:text-brand-black"
        />
      </div>

      <NavItems />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
