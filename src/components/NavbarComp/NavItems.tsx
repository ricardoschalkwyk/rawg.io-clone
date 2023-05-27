import { NavLink } from "react-router-dom";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const NavItems = () => {
  return (
    <div className="ml-6 text-sm font-normal 2xl:text-xl">
      <div className="flex w-full items-center justify-center gap-5 uppercase">
        <NavLink
          className="flex shrink-0 gap-1 hover:underline hover:underline-offset-4"
          to={"/"}
        >
          <span>Log In</span>
        </NavLink>

        <NavLink
          className="flex shrink-0 gap-1 hover:underline hover:underline-offset-4"
          to={"/"}
        >
          <span>Sign Up</span>
        </NavLink>

        <NavLink className="hover:underline hover:underline-offset-4" to={"/"}>
          <span>Api</span>
        </NavLink>
        <div className="flex">
          <EllipsisHorizontalIcon className="h-5 w-5 2xl:h-10 2xl:w-10" />
        </div>
      </div>
    </div>
  );
};

NavItems.propTypes = {};

export default NavItems;
