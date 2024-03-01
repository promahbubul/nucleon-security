import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GrMenu, IoIosArrowDown } from "@assets/Icons/Icons";
import { dropdownMenuList } from "@shared/constants/dropdownMenu.constants";
import DarkButton from "@shared/components/Buttons/DarkButton";
import LightButton from "@shared/components/Buttons/LightButton";
import LanguageSelector from "@shared/components/LanguageSelector";
import {
  headerMenu,
  mobileMenuLinks,
} from "@shared/constants/menuLinks.constants";

const Header = ({ selectedMenu, setSelectedMenu }) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  // Selected environment

  const [theme, setTheme] = useState(null);
  const params = useLocation();

  function handleDropDownMenu(menu) {
    navigate(menu.path);
    setSelectedMenu(menu);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="h-14 dark:bg-navy-800 bg-white border-b border-b-gray-200 dark:border-slate-700 flex flex-row justify-between px-5 items-center">
      {/* PAGE TITLE */}
      <div className=" w-full">
        <div className="relative w-max group hover:bg-slate-200 dark:hover:bg-navy-600 px-2 py-1 rounded-md">
          {showDropDownMenu && (
            <div
              onClick={() => setShowDropDownMenu(false)}
              className="bg-dark-gray/0 fixed inset-y-0 inset-x-0 z-40 cursor-pointer"
            ></div>
          )}
          <button
            onClick={() => setShowDropDownMenu(!showDropDownMenu)}
            className="flex flex-row gap-2 items-center"
          >
            {theme === "dark" ? (
              <img
                src="/images/logo.png"
                alt=""
                className="w-8 h-8 p-2 cursor-pointer"
              />
            ) : (
              <img
                src="/images/category/entities-logo.png"
                alt=""
                className="w-8 h-8 p-2 cursor-pointer"
              />
            )}

            <div to={params} className="flex items-center justify-start   ">
              <h3 className="w-full dark:text-white  text-black  text-base font-medium capitalize">
                {selectedMenu?.title}
              </h3>
            </div>
            <IoIosArrowDown
              className={`dark:text-white text-gray-800 ${
                showDropDownMenu && "rotate-180"
              }`}
            />
          </button>
          {/* NESTED MENU */}
          {showDropDownMenu && (
            <div
              onClick={() => setShowDropDownMenu(false)}
              className="absolute    flex top-9 left-0 bg-white shadow-2xl dark:bg-navy-600  flex-col w-40 rounded-md z-50 "
            >
              {dropdownMenuList.map((menu) => (
                <div
                  key={menu.id}
                  onClick={() => handleDropDownMenu(menu)}
                  className={
                    "cursor-pointer hover:bg-slate-100 text-gray-500 duration-300 p-2 dark:text-navy-100 dark:hover:bg-navy-700 w-full rounded-md  flex flex-row items-center gap-1 "
                  }
                >
                  <img
                    src={menu.logo}
                    alt=""
                    className="w-8 h-8 p-2 cursor-pointer"
                  />
                  {menu.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* HEADER LOGO */}
      <div className="w-full md:flex  text-center m-auto justify-center items-center hidden cursor-pointer select-none">
        <img
          src={
            theme === "dark"
              ? "/images/icon-light.png"
              : "/images/icon-dark.png"
          }
          alt=""
          className="h-9"
        />
        <h1 className="font-nucleon-main text-2xl ml-2 text-info">
          Nucleon EDR
        </h1>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {!showMobileMenu && (
          <button
            onClick={() => setShowMobileMenu(true)}
            className="text-2xl text-gray-500 hover:bg-slate-300 dark:bg-navy-500 dark:text-navy-100 p-2 rounded-md bg-slate-200"
          >
            <GrMenu className="" />
          </button>
        )}
        {showMobileMenu && (
          <>
            <div
              onClick={() => setShowMobileMenu(false)}
              className="fixed inset-y-0 inset-x-0 shadow-md bg-slate-400/70 dark:bg-navy-900/70 z-30"
            ></div>
            <div className="fixed flex flex-col justify-between h-full top-0 left-0 w-10/12  py-5 bg-white dark:bg-navy-700 z-40">
              <div className="">
                <div className="flex flex-row px-5 justify-between items-center">
                  <div className="">
                    <LanguageSelector />
                  </div>
                  {/* DARK MODE BUTTON */}
                  <button className="" onClick={handleThemeSwitch}>
                    {theme === "dark" ? <DarkButton /> : <LightButton />}
                  </button>
                </div>
                {/* SIDEMENU (MOBILE) */}
                <div className=" flex flex-col gap-0.5 mt-5">
                  {mobileMenuLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      onClick={() => setShowMobileMenu(false)}
                      className={
                        "bg-slate-200 dark:bg-navy-900 p-3 dark:hover:bg-navy-800  hover:bg-slate-300 text-gray-500 dark:text-navy-100 font-medium flex flex-row items-center gap-2"
                      }
                      to={item.path}
                    >
                      <span className="">{item.icon()}</span>
                      <span className="capitalize">{item.path}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
              {/* HEADERMENU (MOBILE) */}
              <div className=" flex flex-row justify-between  px-5 text-lg text-gray-500 dark:text-navy-100 md:hidden ">
                {headerMenu.map((menu, index) => (
                  <Link
                    key={index}
                    className="dark:bg-navy-500 hover:bg-slate-100 dark:hover:bg-navy-600 p-2  rounded-full"
                    to={menu.path}
                  >
                    {menu.icon()}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {/* HEADER MENU */}
      <div className="w-full hidden md:flex flex-row justify-end gap-3">
        {/* LANGUAGE SWITCH */}
        <div className="md:flex hidden">
          <LanguageSelector />
        </div>
        {/* DARK MODE BUTTON */}
        <button className="" onClick={handleThemeSwitch}>
          {theme === "dark" ? <DarkButton /> : <LightButton />}
        </button>

        {/* HEADER MENU */}
        <div className="hidden md:flex flex-row gap-2  ">
          {headerMenu.map((menu, index) => (
            <Link key={index} to={"/"} className="">
              <button className=" hover:bg-slate-100  p-2 text-gray-500 dark:text-navy-100 dark:hover:bg-navy-600   rounded-full">
                {menu.icon()}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
