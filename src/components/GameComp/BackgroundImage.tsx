import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { getCropUrl } from "../../utils";

export default function BackgroundImage() {
  const game = useSelector((state: RootState) => state.games.gameData);

  if (!game?.background_image) {
    return null;
  }

  return (
    <div className="absolute top-0 -z-2 left-0 w-full">
      <img
        src={getCropUrl(game?.background_image)}
        className="object-cover relative z-0 w-full opacity-35"
      />
      <div className="absolute inset-0 z-0 from-40% bg-linear-to-t from-brand-black via-brand-black to-transparent"></div>
    </div>
  );
}
