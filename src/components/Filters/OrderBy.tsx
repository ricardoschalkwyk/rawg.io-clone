import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "@headlessui/react";

import { OrderOption } from "./OrderByFilter/OrderByFilterDiv";

interface OrderByProps {
  onClick: (option: OrderOption) => void;
  order: OrderOption[];
}

const OrderBy = ({ order, onClick }: OrderByProps) => {
  return order.map((option) => (
    <MenuItem
      as="button"
      key={option.id}
      className="data-focus:bg-gray-200 flex items-center gap-1 rounded-md p-1 px-2 hover:bg-gray-200"
      onClick={() => {
        onClick?.(option);
      }}
    >
      {option.orderName}

      {option.selected && (
        <FontAwesomeIcon
          icon={faCheck}
          className="h-3 w-3 items-center text-green-500"
        />
      )}
    </MenuItem>
  ));
};

export default OrderBy;
