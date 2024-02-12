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
