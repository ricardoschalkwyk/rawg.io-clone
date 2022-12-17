import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button";
import { OrderOption } from "./OrderByFilter/OrderByFilterDiv";

interface OrderByProps {
  onClick: (option: OrderOption) => void;
  order: OrderOption[];
}

const OrderBy = ({ order, onClick }: OrderByProps) => {
  return (
    <div className="flex w-[177px] flex-col justify-start gap-1 rounded-md bg-white p-2 text-xs font-light text-black">
      {order.map((option, index) => (
        <div
          key={option.id}
          className="flex items-center gap-1 rounded-md p-1 px-2 hover:bg-gray-200"
        >
          <Button
            onClick={() => {
              onClick?.(option);
            }}
          >
            {option.orderName}
          </Button>

          {option.selected && (
            <FontAwesomeIcon
              icon={faCheck}
              className="h-3 w-3 items-center text-green-500"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderBy;
