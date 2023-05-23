import { useNavigate } from "react-router-dom";
import NewReleases from "./NewReleases";
import Top from "./Top";
import Browse from "./Browse";
import Platforms from "./Platforms";
import Genre from "./Genre";
import Button from "../Button";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="mt-24 w-60 flex-col justify-start">
        <div className="space-y-6">
          <Button
            onClick={() => navigate("/")}
            className="text-2xl font-semibold"
          >
            Home
          </Button>
          <div className="text-2xl font-semibold">Reviews</div>
        </div>
        <div className="mt-6">
          <div className="text-2xl font-semibold">New Releases</div>
          <div className="mt-2">
            <NewReleases />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-2xl font-semibold">Top</div>
          <div className="mt-2">
            <Top />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-2xl font-semibold">All Games</div>
        </div>
        <div className="mt-4">
          <div className="text-2xl font-semibold">Browse</div>
          <div className="mt-2">
            <Browse />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-2xl font-semibold">Platforms</div>
          <div className="mt-2">
            <Platforms />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-2xl font-semibold">Genre</div>
          <div className="mt-2">
            <Genre />
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
