import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import OrderByFilterDiv from "./OrderByFilter/OrderByFilterDiv";
import PlatformsFilterDiv from "./PlatformsFilter/PlatformsFilterDiv";

const FilterDiv = () => {
  return (
    <>
      <div>
        <OrderByFilterDiv />
      </div>

      {/* Platforms */}
      <div>
        <PlatformsFilterDiv />
      </div>
    </>
  );
};

FilterDiv.propTypes = {};

export default FilterDiv;
