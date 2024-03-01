/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import NotificationSidebar from "./NotificationSidebar";

const SideMenu = ({ sideLinks }) => {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <aside className="w-12 h-full bg-white dark:bg-navy-800 border-r border-r-gray-200 dark:border-slate-700 py-3 hidden md:flex flex-col justify-between">
        <div className="">
          <div className="flex flex-col gap-2 mt-2 p-1">
            {sideLinks &&
              sideLinks.map((item, index) => (
                <>
                  <NavLink
                    data-tooltip-id={item.title}
                    data-tooltip-content={item.title}
                    to={item.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "dark:bg-navy-600 bg-slate-200 text-gray-500 dark:text-navy-100 text-xl border-2 border-info py-2 rounded-full flex flex-col items-center"
                        : "text-gray-500 dark:text-navy-100 text-xl dark:hover:bg-navy-600 hover:bg-slate-200 border-2 border-transparent py-2 rounded-full flex flex-col items-center"
                    }
                  >
                    {item.icon()}
                  </NavLink>
                  <Tooltip
                    id={item.title}
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
