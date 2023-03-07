import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import Button from "../../Button";
import Platforms from "../Platforms";
import { setGames } from "../../../store/games";
import { GetResult } from "../../../types";

import Api from "../../../api";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
interface child_query {
  id: number;
  platformName: string;
  selected: boolean;
}

export interface PlatformOption {
  id: number;
  platformName: string;
  selected: boolean;
  active?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  parent_query:
    | "1" // PC
    | "2" // PlayStation
    | "18" // PlayStation 4
    | "187" // PlayStation 5
    | "3" // Xbox
    | "1" // Xbox One
    | "186" // Xbox series X
    | "4" // IOS
    | "8" // Android
    | "5" // Apple
    | "6" // Linux
    | "7" // Nintendo
    | "7" // Nintendo Switch
    | "49" // NES
    | "14"; // Web

  child_query?: child_query[];
}

const platformsOptions: PlatformOption[] = [
  {
    id: 1,
    platformName: "PC",
    selected: false,
    parent_query: "1",
  },

  {
    id: 2,
    platformName: "PlayStation",
    selected: false,
    active: false,
    parent_query: "2",
    icon: ChevronRightIcon,
    child_query: [
      {
        id: 1,
        platformName: "PlayStation 4",
        selected: false,
      },
      {
        id: 2,
        platformName: "PlayStation 5",
        selected: false,
      },
    ],
  },

  {
    id: 3,
    platformName: "Xbox",
    selected: false,
    active: false,
    parent_query: "3",
    icon: ChevronRightIcon,
    child_query: [
      {
        id: 1,
        platformName: "Xbox One",
        selected: false,
      },
      {
        id: 2,
        platformName: "Xbox Series X",
        selected: false,
      },
    ],
  },

  {
    id: 4,
    platformName: "iOS",
    selected: false,
    parent_query: "4",
  },

  {
    id: 5,
    platformName: "Android",
    selected: false,
    parent_query: "8",
  },

  {
    id: 6,
    platformName: "Apple Macintosh",
    selected: false,
    parent_query: "5",
  },

  {
    id: 7,
    platformName: "Linux",
    selected: false,
    parent_query: "6",
  },

  {
    id: 8,
    platformName: "Nintendo",
    selected: false,
    active: false,
    parent_query: "7",
    icon: ChevronRightIcon,
    child_query: [
      {
        id: 1,
        platformName: "Nintendo Switch",
        selected: false,
      },
      {
        id: 2,
        platformName: "Nes",
        selected: false,
      },
    ],
  },
];

const PlatformsFilterDiv = () => {
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [platformsValue, setPlatformsValue] = useState("Platforms");
  const [options, setOptions] = useState(platformsOptions);

  const dispatch = useDispatch();

  const handleClick = (option: PlatformOption) => {
    const index = options.findIndex((item) => item.id === option.id);

    let newArray = platformsOptions.map((item) => ({
      ...item,
      selected: false,
    }));
    newArray[index].selected = !newArray[index].selected;
    setOptions(newArray);
  };

  const handlePlatform = async (option: PlatformOption) => {
    try {
      // Get input for the search
      const { results } = await Api.get<GetResult>(
        `&ordering=&parent_platforms=${option.parent_query}`
      );

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
            setShowPlatforms(true);
          }}
          className="flex items-center space-x-3 rounded-md bg-brand-dark py-2 px-3 text-sm font-light duration-500 ease-in-out hover:text-brand-light-gray"
        >
          <div className="flex items-center gap-1 font-light">
            <span className="font-normal">{platformsValue}</span>
          </div>
          <span className="text-brand-light-gray">
            <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
          </span>
        </Button>

        {showPlatforms && (
          <div className="absolute top-64 z-20">
            <Platforms
              onClick={(option) => {
                handleClick(option);
                handlePlatform(option);
                setPlatformsValue(option.platformName);
                setShowPlatforms(false);
              }}
              platform={options}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PlatformsFilterDiv;
