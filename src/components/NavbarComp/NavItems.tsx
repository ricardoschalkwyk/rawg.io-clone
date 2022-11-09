import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const NavItems = () => {
  return (
    <div className="flex w-full justify-center gap-10">
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Contact</Button>
      <Button>Search</Button>
    </div>
  );
};

NavItems.propTypes = {};

export default NavItems;
