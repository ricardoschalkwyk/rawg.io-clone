import BackgroundImage from "../components/GameComp/BackgroundImage";
import GameSelected from "../components/GameComp/SelectedGame";

const DisplayPage = () => {
  return (
    <div className="w-full">
      <BackgroundImage />

      <div className="flex justify-center items-start">
        <div className="max-w-4xl">
          <GameSelected />
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
