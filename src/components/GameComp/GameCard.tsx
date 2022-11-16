import React, { useState } from "react";
import PropTypes from "prop-types";

const GameCard = () => {
  return (
    <div className="group rounded-b-md bg-rawg-dark hover:overflow-visible">
      <div className="rounded-t-md bg-slate-100 py-16">Video</div>

      <div className="p-2">
        <div className="flex justify-start pt-2 text-2xl uppercase">
          New World
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between">
            <div>Release date: </div>
            <div>July 3, 2020</div>
          </div>
          <div className="hidden justify-between group-hover:block">
            <div>Genre:</div>
            <div>MMO, RPG, Looter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {};

export default GameCard;
