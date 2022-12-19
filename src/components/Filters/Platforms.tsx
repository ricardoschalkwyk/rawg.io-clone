import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { PlatformOption } from "./PlatformsFilter/PlatformsFilterDiv";
import Button from "../Button";

interface PlatformProps {
  onClick: (option: PlatformOption) => void;
  platform: PlatformOption[];
}

const Platforms = ({ platform, onClick }: PlatformProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex w-[150px] flex-col justify-start gap-1 rounded bg-white p-2 text-xs font-light text-black">
      {platform.map((option) => (
        <div
          key={option.id}
          className="flex items-center gap-1 rounded-md p-1 px-2 hover:bg-gray-200"
        >
          <Button
            onClick={() => {
              onClick(option);
            }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
          >
            {option.platformName}
          </Button>

          {!hover && (
            <div className="absolute -right-14 bg-gray-400">
              {option.other?.map((item) => {
                // Add possible filter method
                return (
                  <Button key={item.id}>
                    <div>{item.platformName}</div>
                  </Button>
                );
              })}
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
