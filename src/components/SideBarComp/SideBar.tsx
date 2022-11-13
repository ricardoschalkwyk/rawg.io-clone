import NewReleases from "./NewReleases";
import Top from "./Top";
import Browse from "./Browse";
import Platforms from "./Platforms";
import Genre from "./Genre";

const SideBar = () => {
  return (
    <div className="mt-24 w-64 flex-col justify-start">
      <div className="space-y-6">
        <div className="text-2xl font-semibold">Home</div>
        <div className="text-2xl font-semibold">Reviews</div>
      </div>

      <div className="mt-3">
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
  );
};

SideBar.propTypes = {};

export default SideBar;
