import { Link, NavLink } from "react-router-dom";
import {
  LiaBookSolid,
  FaBell,
  RiLogoutBoxRLine,
} from "../../assets/Icons/Icons";
import { logo } from "../../assets/Images/Images";
import { useState } from "react";
import NotificationSidebar from "../ui/NotificationSidebar/NotificationSidebar";
import { Tooltip } from "react-tooltip";

const SideMenu = ({ sideLinks }) => {
  const [category, setCategory] = useState();
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <aside
        className="w-12 h-full   bg-white  dark:bg-navy-800 border-r border-r-gray-200 dark:border-slate-700 py-3 hidden md:flex flex-col justify-between
    "
      >
        <div className="">
          <div className="relative group hover:bg-slate-200 dark:hover:bg-navy-600 py-1 rounded-full">
            <Link to={""} className="flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt=""
                className="w-8 h-8 p-2 cursor-pointer"
              />
            </Link>
            {/* NESTED MENU */}
            <div className="absolute z-20  hidden group-hover:flex top-0 left-[100%] bg-white shadow-2xl dark:bg-navy-800  flex-col w-32 rounded-r-md ">
              <NavLink
                className={
                  "cursor-pointer hover:bg-slate-100 text-gray-500 duration-300 p-2 dark:text-navy-100 dark:hover:bg-navy-600 w-full rounded-md"
                }
                to={"/dashboard"}
              >
                Entitie's View
              </NavLink>
              <NavLink
                className={
                  "cursor-pointer hover:bg-slate-100 text-gray-500 duration-300 p-2 dark:text-navy-100 dark:hover:bg-navy-600 rounded-md"
                }
                to={"/training"}
              >
                Training
              </NavLink>
              <NavLink
                className={
                  "cursor-pointer hover:bg-slate-100 text-gray-500 duration-300 p-2 dark:text-navy-100 dark:hover:bg-navy-600 rounded-md"
                }
                to={"/others"}
              >
                Others
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            {sideLinks.map((item, index) => (
              <>
                <NavLink
                  data-tooltip-id={item.path}
                  data-tooltip-content={item.path}
                  to={item.path}
                  key={index}
                  className="text-gray-500 dark:text-navy-100 text-xl dark:hover:bg-navy-600 hover:bg-slate-200 py-3  rounded-full flex flex-col items-center "
                >
                  {item.icon()}
                </NavLink>
                <Tooltip
                  id={item.path}
                  style={{
                    backgroundColor: "#31CDFE",
                    color: "white",
                    textTransform: "capitalize",
                    zIndex: 200,
                  }}
                />
              </>
            ))}
          </div>
        </div>
      </aside>
      {showNotification ? (
        <NotificationSidebar setShowNotification={setShowNotification} />
      ) : (
        ""
      )}
    </>
  );
};

export default SideMenu;
