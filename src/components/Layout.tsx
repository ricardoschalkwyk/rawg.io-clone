import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavbarComp/Navbar";
import SideBar from "./SideBarComp/SideBar";

function Layout() {
  return (
    <div className="container mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
