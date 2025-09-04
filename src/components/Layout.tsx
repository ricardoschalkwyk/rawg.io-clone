import { Outlet } from "react-router-dom";

import Navbar from "./NavbarComp/Navbar";
import SideBar from "./SideBarComp/SideBar";

function Layout() {
  return (
    <div className="mb-20 max-w-3/4 mx-auto sm:px-10">
      <Navbar />

      <div className="flex gap-12">
        <div className="hidden xl:block">
          <SideBar />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
