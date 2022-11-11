import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavbarComp/Navbar";
import SideBar from "./SideBarComp/SideBar";

function Layout() {
  return (
    <div className="container mx-9">
      <div>
        <Navbar />
      </div>
      <div>
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
