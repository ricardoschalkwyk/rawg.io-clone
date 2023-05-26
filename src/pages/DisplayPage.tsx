import { useParams } from "react-router-dom";
import GameSelected from "../components/GameComp/SelectedGame";

const DisplayPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <GameSelected />
    </div>
  );
};

DisplayPage.propTypes = {};

export default DisplayPage;
