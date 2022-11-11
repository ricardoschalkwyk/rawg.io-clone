import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavbarComp/Navbar";

function Layout() {
  return (
    <div className="container mx-9">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
