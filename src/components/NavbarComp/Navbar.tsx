import PropTypes from "prop-types";
import Button from "../Button";
import NavItems from "./NavItems";
import Input from "../Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="mt-7 flex w-full items-center">
      <div className="flex items-center pr-12 text-xl font-bold uppercase text-rawg-white">
        rawg
      </div>

      <div className="rounded-md bg-rawg-white px-4 py-0.5 font-light text-rawg-black">
        RateGamesRate
      </div>

      <div className="mx-6 flex w-full items-center gap-2 rounded-full bg-rawg-gray px-4 py-3 transition duration-150 ease-in-out hover:bg-rawg-white hover:text-rawg-black">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <Input type="text" className="w-full bg-rawg-gray outline-none" />
      </div>
      <NavItems />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
