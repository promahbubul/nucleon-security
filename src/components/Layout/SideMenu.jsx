import { Link, NavLink } from "react-router-dom";
import {
  LiaBookSolid,
  FaBell,
  RiLogoutBoxRLine,
} from "../../assets/Icons/Icons";
import { logo } from "../../assets/Images/Images";
import { useState } from "react";
import NotificationSidebar from "../ui/NotificationSidebar/NotificationSidebar";

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
          <div className="relative group">
            <Link to={""} className="flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt=""
                className="w-8 h-8 p-2 cursor-pointer"
              />
            </Link>
            <div className="absolute z-20  hidden group-hover:flex top-0 left-[100%] bg-white dark:bg-navy-800  flex-col w-32 rounded-r-md ">
              <NavLink
                className={
                  "cursor-pointer hover:bg-slate-100 duration-300 p-2 text-gray-500 w-full rounded-md"
                }
                to={"/dashboard"}
              >
                Entitie's View
              </NavLink>
              <NavLink
                className={
                  "cursor-pointer hover:bg-slate-100 duration-300 p-2 text-gray-500 rounded-md"
                }
                to={"/training"}
              >
                Training
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {sideLinks.map((item, index) => (
              <NavLink to={item.path} key={index}>
                <button className="dark:text-slate-300 text-gray-500  text-center flex items-center justify-center   mx-auto text-lg py-1 border-l-[3px] border-transparent focus:border-info active:border-info  hover:border-info w-full px-2">
                  {item.icon()}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <NavLink to="https://nucleonsecurity.freshdesk.com/support/solutions">
            <button className="dark:text-slate-300 text-gray-500 text-center   mx-auto text-lg py-1 border-l-[3px] border-transparent flex items-center justify-center focus:border-info active:border-info  hover:border-info w-full px-2">
              <LiaBookSolid />
            </button>
          </NavLink>

          <button
            onClick={() => setShowNotification(!showNotification)}
            className="dark:text-slate-300 text-gray-500 text-center   mx-auto text-lg py-1 border-l-[3px] border-transparent flex items-center justify-center focus:border-info active:border-info  hover:border-info w-full px-2"
          >
            <FaBell />
          </button>

          <NavLink to="/">
            <button className="dark:text-slate-300 text-gray-500 text-center   mx-auto text-lg py-1 border-l-[3px] border-transparent flex items-center justify-center focus:border-info active:border-info  hover:border-info w-full px-2">
              <RiLogoutBoxRLine />
            </button>
          </NavLink>
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
