import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import Button from "../Button";
import { PlatformOption } from "./PlatformsFilter/PlatformsFilterDiv";

interface PlatformProps {
  onClick: (option: PlatformOption) => void;
  platform: PlatformOption[];
}

const Platforms = ({ platform, onClick }: PlatformProps) => {
  const [hover, setHover] = useState(false);

  const handleHover = (index: number) => {
    let otherOptions = platform.map((item) =>
      item.other?.map(() => ({
        ...item,
        PlatformName: "PlayStation",
      }))
    );
  };

  return (
    <div className="flex w-[150px] flex-col justify-start gap-1 rounded bg-white p-2 text-xs font-light text-black">
      {platform.map((option, index) => (
        <div
          key={option.id}
          className="flex items-center gap-1 rounded-md p-1 px-2 hover:bg-gray-200"
        >
          <Button
            onClick={() => {
              onClick(option);
            }}
          >
            {option.platformName}
          </Button>

          {!hover && (
            <div
              className="absolute -right-10 bg-gray-400"
              onMouseOver={() => {
                setHover(true);
              }}
              onMouseOut={() => {
                setHover(false);
              }}
            >
              {option.other?.map((item) => (
                <div key={item.id}>{item.platformName}</div>
              ))}
            </div>
          )}

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

export default Platforms;
