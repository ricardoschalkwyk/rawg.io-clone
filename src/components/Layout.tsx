import { Outlet } from "react-router-dom";

import Navbar from "./NavbarComp/Navbar";
import SideBar from "./SideBarComp/SideBar";

function Layout() {
  return (
    <div className="container mx-auto mb-20 sm:px-10">
      <Navbar />

      <div className="flex 2xl:gap-12">
        <div className="hidden lg:block">
          <SideBar />
        </div>

        <div className="px-2 lg:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
