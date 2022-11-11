import React, { useState } from "react";
import PropTypes from "prop-types";

const GameCard = () => {
  return (
    <>
      <div className="rounded-md p-4 ring-1 ring-purple-700 hover:ring-4">
        <div className="bg-slate-100 py-16">Video</div>

        <div className="flex justify-start pt-2 text-2xl uppercase">
          New World
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex justify-between">
            <div>Release date: </div>
            <div>July 3, 2020</div>
          </div>

          <div className="flex justify-between">
            <div>Genre:</div>
            <div>MMO, RPG, Looter</div>
          </div>
        </div>
      </div>
    </>
  );
};

GameCard.propTypes = {};

export default GameCard;
