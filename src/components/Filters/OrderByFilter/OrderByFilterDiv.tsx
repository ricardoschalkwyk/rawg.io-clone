import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Button from "../../Button";
import OrderBy from "../OrderBy";
import Api from "../../../api";
import { GetResult } from "../../../types";
import { useDispatch } from "react-redux";
import { setGames } from "../../../store/games";

export interface OrderOption {
  id: number;
  orderName: string;
  selected: boolean;
  query:
    | "name"
    | "relevance"
    | "released"
    | "added"
    | "created"
    | "updated"
    | "rating";
}

const orderOptions: OrderOption[] = [
  {
    id: 1,
    orderName: "Relevance",
    selected: false,
    query: "relevance",
  },

  {
    id: 2,
    orderName: "Date added",
    selected: false,
    query: "created",
  },

  {
    id: 3,
    orderName: "Name",
    selected: false,
    query: "name",
  },

  {
    id: 4,
    orderName: "Release date",
    selected: false,
    query: "released",
  },

  {
    id: 5,
    orderName: "Popularity",
    selected: false,
    query: "added",
  },

  {
    id: 6,
    orderName: "Average rating",
    selected: false,
    query: "rating",
  },
];

const OrderByFilterDiv = () => {
  const [showOrderBy, setShowOrderBy] = useState(false);
  const [orderValue, setOrderValue] = useState("Relevance");

  const [options, setOptions] = useState(orderOptions);

  const dispatch = useDispatch();

  const handleClick = (option: OrderOption) => {
    const index = options.findIndex((item) => item.id === option.id);

    let newArray = options.map((item) => ({ ...item, selected: false }));
    newArray[index].selected = !newArray[index].selected;
    setOptions(newArray);
  };

  const handleOrder = async (option: OrderOption) => {
    try {
      // Get input for the search
      const { results } = await Api.get<GetResult>(`&ordering=${option}`);

      dispatch(setGames(results));
      console.log("🚀 ~ getGames ~ results", results);
    } catch (error) {
      alert("Item not found");
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setShowOrderBy(true);
          }}
          className="flex items-center space-x-3 rounded-md bg-brand-dark py-2 px-3 text-sm font-light duration-500 ease-in-out hover:text-brand-light-gray"
        >
          <div className="flex items-center gap-1 font-light">
            Order by:
            <span className="font-normal">{orderValue}</span>
          </div>
          <span className="text-brand-light-gray">
            <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
          </span>
        </Button>

        {showOrderBy && (
          <div className="absolute top-64 z-20">
            <OrderBy
              order={options}
              onClick={(option) => {
                handleClick(option);
                handleOrder(option.query);
                setOrderValue(option.orderName);
                setShowOrderBy(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

OrderByFilterDiv.propTypes = {};

export default OrderByFilterDiv;
