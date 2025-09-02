import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "@headlessui/react";

import { PlatformOption } from "./PlatformsFilter/PlatformsFilterDiv";

interface PlatformProps {
  onClick: (option: PlatformOption) => void;
  platform: PlatformOption[];
}

const Platforms = ({ platform, onClick }: PlatformProps) => {
  return (
    <div className="flex w-[150px] flex-col justify-start gap-1 rounded-sm bg-white p-2 text-xs font-normal text-black">
      {platform.map((option) => (
        <MenuItem
          as="button"
          key={option.id}
          className="data-focus:bg-gray-200 flex items-center gap-1 rounded-md p-1 px-2 hover:bg-gray-200"
          onClick={() => {
            onClick?.(option);
          }}
        >
          {option.platformName}

          {option.selected && (
            <FontAwesomeIcon
              icon={faCheck}
              className="h-3 w-3 items-center text-green-500"
            />
          )}
        </MenuItem>
      ))}
    </div>
  );
};

export default Platforms;
