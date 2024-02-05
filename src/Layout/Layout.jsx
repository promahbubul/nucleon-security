import { Outlet } from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";
import { AiFillDashboard, FaUser } from "../assets/Icons/Icons";

const Layout = () => {
  const sideLinks = [
    { path: "", icon: AiFillDashboard },
    { path: "account", icon: FaUser },
  ];
  return (
    <div className="flex flex-row h-screen">
      {/* sidebar */}
      <SideMenu sideLinks={sideLinks} />
      {/* Content Area */}
      <div className="p-3 bg-black w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
