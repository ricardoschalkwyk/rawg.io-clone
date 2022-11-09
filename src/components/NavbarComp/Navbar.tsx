import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import NavItems from "./NavItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const closeFunction = async () => {
    setClose(false);
  };

  const openFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
  };

  return (
    <>
      <div className="m-8 flex items-center justify-start gap-5 rounded-md bg-gradient-to-l from-purple-500 p-3 text-white">
        <Button
          onClick={() => closeFunction()}
          className="active:-translate-y-1 active:scale-110 "
        >
          navbar
        </Button>

        {/* Navigation buttons */}
        <NavItems />

        <Button className="pr-2">Close</Button>
      </div>

      <div>
        <Button
          onClick={() => openFunction()}
          className="active:-translate-y-1 active:scale-110 "
        >
          navbar
        </Button>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
