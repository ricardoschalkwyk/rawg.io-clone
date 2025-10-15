import OrderByFilterDiv from "./OrderByFilter/OrderByFilterDiv";
import PlatformsFilterDiv from "./PlatformsFilter/PlatformsFilterDiv";

const FilterDiv = () => {
  return (
    <div className="overflow-x-auto w-full max-w-10/12 flex">
      <OrderByFilterDiv />

      <PlatformsFilterDiv />
    </div>
  );
};

FilterDiv.propTypes = {};

export default FilterDiv;
