import React from "react";
import PropTypes from "prop-types";
import GameCard from "../components/GameComp/GameCard";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="mt-28 grid grid-cols-3 gap-14">
      <Button type="submit" className="w-full" onClick={(e) => {}}>
        <GameCard />
      </Button>

      <Button className="w-full">
        <GameCard />
      </Button>

      <Button className="w-full">
        <GameCard />
      </Button>

      <Button className="w-full">
        <GameCard />
      </Button>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
