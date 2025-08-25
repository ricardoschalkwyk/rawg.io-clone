import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../Button";
import { Result } from "../../../types";

type Props = {
  screenShots?: Result;
};

const contibutors = [
  {
    id: "1",
    name: "Frinkie",
    edits: "24",
    followCount: "49",
  },
  {
    id: "2",
    name: "Davie",
    edits: "13",
    followCount: "87",
  },
  {
    id: "3",
    name: "Bobby",
    edits: "2",
    followCount: "234",
  },
  {
    id: "4",
    name: "Drake",
    edits: "29",
    followCount: "109",
  },
  {
    id: "5",
    name: "Bethhoven20",
    edits: "45",
    followCount: "173",
  },
];

const GameScreenshots = ({ screenShots }: Props) => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="p relative rounded-md bg-gray-300 px-36 py-16 md:px-44 md:py-24">
        <div>video 1</div>
        <Button className="absolute bottom-0 right-0 m-3 flex items-center gap-2 rounded-sm bg-brand-dark bg-opacity-50 p-1 px-2 text-xs font-normal text-brand-white">
          <FontAwesomeIcon
            className="h-5 w-5 text-brand-white"
            icon={faYoutube}
          />
          Play full video
        </Button>
      </div>

      {/* Preview Images */}
      <div className="mt-4 grid shrink-0 grid-cols-2 gap-5">
        <div className="rounded-md bg-gray-300 px-12 py-8 md:px-16 md:py-10">
          image 1
        </div>
        <div className="rounded-md bg-gray-300 px-12 py-8 md:px-16 md:py-10">
          image 2
        </div>
        <div className="rounded-md bg-gray-300 px-12 py-8 md:px-16 md:py-10">
          image 3
        </div>
        <div className="rounded-md bg-gray-300 px-12 py-8 md:px-16 md:py-10">
          image 4
        </div>
      </div>

      {/* Editing info */}
      <div className="mt-4 flex w-full max-w-80 flex-col items-center justify-center md:max-w-96">
        <Button className="flex w-full justify-center gap-2 bg-white py-4 text-brand-dark">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="h-5 w-5 items-center"
          />
          Edit the game info
        </Button>

        <p className="mt-2 text-sm font-thin text-brand-light-gray">
          Last Modified: Jul 9, 2023
        </p>
      </div>

      {/* Where to buy */}
      <div className="mt-10 w-full">
        <h1 className="text-lg font-thin text-brand-light-gray">
          Where to buy
        </h1>
        <Button className="mt-4 bg-brand-side-dark px-8 py-3 text-sm font-normal text-brand-light-gray transition-all duration-300 hover:bg-brand-white hover:text-brand-dark">
          Nintendo Switch
        </Button>
      </div>

      {/* Top contributors */}
      <div className="mt-5 w-full">
        <h1 className="text-lg font-thin text-brand-light-gray">
          Top contributors
        </h1>

        <div className="divide-y divide-brand-gray">
          {contibutors.map((item) => (
            <div key={item.id} className="flex justify-between py-4">
              <div className="flex">
                <div className="mr-5 rounded-full bg-white p-5"></div>
                <div>
                  <h1 className="text-base font-thin">{item.name}</h1>
                  <p className="text-xs font-light text-brand-light-gray">
                    {item.edits} edits
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Button className="rounded-sm px-3 py-1 text-xs font-thin ring-1 ring-brand-light-gray">
                  <FontAwesomeIcon
                    className="h-2 w-2 text-brand-white"
                    icon={faPlus}
                  />
                  Follow
                </Button>
                <p className="mt-1 text-xs font-thin text-brand-light-gray">
                  {item.followCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

GameScreenshots.propTypes = {};

export default GameScreenshots;
