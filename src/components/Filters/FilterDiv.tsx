import OrderByFilterDiv from "./OrderByFilter/OrderByFilterDiv";
import PlatformsFilterDiv from "./PlatformsFilter/PlatformsFilterDiv";

const FilterDiv = () => {
  return (
    <>
      {/* Order */}

      <OrderByFilterDiv />

      {/* Platforms */}

      <PlatformsFilterDiv />
    </>
  );
};

FilterDiv.propTypes = {};

export default FilterDiv;
