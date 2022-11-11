import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="text-lg font-light">
      <div className="flex w-full justify-center gap-5 uppercase">
        <NavLink to={"/"}>Log</NavLink>
        <NavLink to={"/home"}>Sign</NavLink>
        <NavLink to={"/about"}>Api</NavLink>
        <NavLink to={"/contact"}>...</NavLink>
      </div>
    </div>
  );
};

NavItems.propTypes = {};

export default NavItems;
