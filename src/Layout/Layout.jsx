import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";
import {
  AiFillDashboard,
  FaUser,
  IoMdSettings,
  RiLogoutBoxRLine,
} from "../assets/Icons/Icons";

const Layout = () => {
  const sideLinks = [
    { path: "", icon: AiFillDashboard },
    { path: "account", icon: FaUser },
  ];

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
    { path: "/account", icon: FaUser },
    { path: "/account", icon: RiLogoutBoxRLine },
  ];

  const params = useLocation();

  console.log(params);

  return (
    <div className=" h-screen">
      {/* HEADER */}
      <header className="h-14 bg-black flex flex-row justify-between px-5 items-center">
        <h3 className="text-white  text-base font-medium">Entity section</h3>
        <div className="flex flex-row gap-2 ">
          {headerMenu.map((menu, index) => (
            <Link key={index} to={"/"} className="">
              <button className="bg-dark-gray p-2 text-silver-gray hover:bg-info hover:text-white  rounded-sm">
                {menu.icon()}
              </button>
            </Link>
          ))}

          {/* ACCOUNT */}
          {/* SETTINGS */}
          {/* LOGOUT */}
        </div>
      </header>
      {/* MAIN */}
      <main className="flex flex-row h-[calc(100vh-56px)]">
        {/* SIDEBAR */}
        <SideMenu sideLinks={sideLinks} />
        {/* CONTENT AREA */}
        <div className="p-3 bg-black w-full    overflow-hidden overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
