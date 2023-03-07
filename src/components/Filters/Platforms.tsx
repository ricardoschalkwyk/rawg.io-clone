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
  const [activePlatform, setActivePlatform] = useState(platform);

  const handleOnHover = (index: any) => {
    let newArray = platform.map((item) => ({ ...item, active: false }));
    newArray[index].active = !newArray[index].active;
    setActivePlatform(newArray);
  };

  const handleHoverOff = (index: any) => {
    let newArray = platform.map((item) => ({ ...item, active: false }));
    newArray[index].active = !newArray[index].active;
    setActivePlatform(newArray);
  };

  return (
    <div className="flex w-[150px] flex-col justify-start gap-1 rounded bg-white p-2 text-xs font-normal text-black">
      {activePlatform.map((option, index) => (
        <div
          key={option.id}
          onMouseOver={() => {
            handleOnHover(index);
          }}
          onMouseOut={() => {
            handleHoverOff(index);
          }}
          className="flex items-center gap-1 rounded-md p-1 px-2 transition-all duration-200 hover:bg-gray-200"
        >
          <Button
            onClick={() => {
              onClick(option);
            }}
          >
            {option.platformName}
          </Button>

          {option.active && option.child_query?.length && (
            <div className="absolute -right-16 flex flex-col gap-1 rounded-md bg-white p-1 py-2">
              {option.child_query?.map((item) => {
                // Add possible filter method

                return (
                  <div key={item.id}>
                    <Button
                      onClick={() => {
                        onClick(option);
                      }}
                      className="w-full rounded-md p-1 pr-10 text-left transition-all duration-200 hover:bg-gray-200"
                    >
                      <span>{item.platformName}</span>
                    </Button>
                  </div>
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
