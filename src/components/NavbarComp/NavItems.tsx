import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="text-sm font-normal">
      <div className="flex w-full justify-center gap-5 uppercase">
        <NavLink className="hover:underline hover:underline-offset-4" to={"/"}>
          Log_In
        </NavLink>
        <NavLink
          className="hover:underline hover:underline-offset-4"
          to={"/home"}
        >
          Sign_Up
        </NavLink>
        <NavLink
          className="hover:underline hover:underline-offset-4"
          to={"/about"}
        >
          Api
        </NavLink>
        <NavLink to={"/contact"}>...</NavLink>
      </div>
    </div>
  );
};

NavItems.propTypes = {};

export default NavItems;
