import OrderByFilterDiv from "./OrderByFilter/OrderByFilterDiv";
import PlatformsFilterDiv from "./PlatformsFilter/PlatformsFilterDiv";

const FilterDiv = () => {
  return (
    <>
      {/* Order */}
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
