import SideMenu from '../components/Layout/SideMenu'
import {
  ImLab,
  IoSearch,
  AiFillDashboard,
  ImDisplay,
  RiBankFill,
  FaLockOpen,
  FaUser,
  MdInsertChart,
  IoMdSettings,
  RiLogoutBoxRLine,
  GrMenu,
  IoIosArrowDown,
  MdOutlineInventory,
  IoMdApps,
} from '../assets/Icons/Icons'
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import DarkButton from '../components/ui/Buttons/DarkButton'
import LightButton from '../components/ui/Buttons/LightButton'
import { FaBell, FaBook } from 'react-icons/fa'
import LanguageSelector from '../components/LanguageSelector'
import { useState } from 'react'

const Layout = ({
  handleThemeSwitch,
  theme,
  showMobileMenu,
  setShowMobileMenu,
  setShowDropDownMenu,
  showDropDownMenu,
  dropdownMenuList,
}) => {
  const navigate = useNavigate()
  // Selected environment
  const [selectedMenu, setSelectedMenu] = useState(dropdownMenuList[0])

  console.log({ selectedMenu })

  function handleDropDownMenu(menu) {
    navigate(menu.path)
    setSelectedMenu(menu)
  }

  const sideLinks = [
    { path: 'dashboard', icon: AiFillDashboard, allow: [2, 3] },
    { path: 'events', icon: IoSearch, allow: [2, 3] },
    { path: 'analyzes', icon: ImLab, allow: [2, 3] },
    { path: 'policies', icon: RiBankFill, allow: [2, 3] },
    { path: 'endpoints', icon: ImDisplay, allow: [2, 3] },
    { path: 'vulnerabilities', icon: FaLockOpen, allow: [2, 3] },
    { path: 'capacity', icon: MdInsertChart, allow: [2, 3] },
    { path: 'inventories', icon: MdOutlineInventory, allow: [2, 3] },
    { path: 'applications', icon: IoMdApps, allow: [2, 3] },
  ]

  const mobileMenuLinks = [
    { path: 'dashboard', icon: AiFillDashboard },
    { path: 'events', icon: IoSearch },
    { path: 'analyzes', icon: ImLab },
    { path: 'policies', icon: RiBankFill },
    { path: 'endpoints', icon: ImDisplay },
    { path: 'vulnerabilities', icon: FaLockOpen },
    { path: 'capacity', icon: MdInsertChart },
    { path: 'inventories', icon: MdOutlineInventory },
    { path: 'applications', icon: IoMdApps },
  ]

  // HEADER MENUS
  const headerMenu = [
    { path: '/account', icon: IoMdSettings },
    { path: '/account', icon: FaBell },
    { path: '/account', icon: FaBook },
    { path: '/account', icon: FaUser },
    { path: '/account', icon: RiLogoutBoxRLine },
  ]

  const params = useLocation()

  return (
    <div className=' h-screen'>
      {/* HEADER */}
      <header className='h-14 dark:bg-navy-800 bg-white border-b border-b-gray-200 dark:border-slate-700   flex flex-row  justify-between px-5 items-center'>
        {/* PAGE TITLE */}
        <div className=' w-full'>
          <div className='relative w-max group hover:bg-slate-200 dark:hover:bg-navy-600 px-2 py-1 rounded-md'>
            {showDropDownMenu && (
              <div
                onClick={() => setShowDropDownMenu(false)}
                className='bg-dark-gray/0 fixed inset-y-0 inset-x-0 z-40 cursor-pointer'
              ></div>
            )}
            <button
              onClick={() => setShowDropDownMenu(!showDropDownMenu)}
              className='flex flex-row gap-2 items-center '
            >
              {theme === 'dark' ? (
                <img
                  src='/images/logo.png'
                  alt=''
                  className='w-8 h-8 p-2 cursor-pointer'
                />
              ) : (
                <img
                  src='/images/category/entities-logo.png'
                  alt=''
                  className='w-8 h-8 p-2 cursor-pointer'
                />
              )}

              <div to={params} className='flex items-center justify-start   '>
                <h3 className='w-full dark:text-white  text-black  text-base font-medium capitalize'>
                  {selectedMenu?.title}
                </h3>
              </div>
              <IoIosArrowDown
                className={`dark:text-white text-gray-800 ${
                  showDropDownMenu && 'rotate-180'
                }`}
              />
            </button>
            {/* NESTED MENU */}
            {showDropDownMenu && (
              <div
                onClick={() => setShowDropDownMenu(false)}
                className='absolute    flex top-9 left-0 bg-white shadow-2xl dark:bg-navy-600  flex-col w-40 rounded-md z-50 '
              >
                {dropdownMenuList.map((menu) => (
                  <div
                    key={menu.id}
                    onClick={() => handleDropDownMenu(menu)}
                    className={
                      'cursor-pointer hover:bg-slate-100 text-gray-500 duration-300 p-2 dark:text-navy-100 dark:hover:bg-navy-700 w-full rounded-md  flex flex-row items-center gap-1 '
                    }
                  >
                    <img
                      src={menu.img1}
                      alt=''
                      className='w-8 h-8 p-2 cursor-pointer'
                    />
                    {menu.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* HEADER LOGO */}
        <div className='w-full md:flex  text-center m-auto justify-center items-center hidden '>
          {theme === 'dark' ? (
            <img
              src='/images/header-logo-2.png'
              alt=''
              className='w-7/12 cursor-pointer'
            />
          ) : (
            <img
              src='/images/header-logo-1.png'
              alt=''
              className='w-7/12 cursor-pointer'
            />
          )}
        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
          {!showMobileMenu && (
            <button
              onClick={() => setShowMobileMenu(true)}
              className='text-2xl text-gray-500 hover:bg-slate-300 dark:bg-navy-500 dark:text-navy-100 p-2 rounded-md bg-slate-200'
            >
              <GrMenu className='' />
            </button>
          )}
          {showMobileMenu && (
            <>
              <div
                onClick={() => setShowMobileMenu(false)}
                className='fixed inset-y-0 inset-x-0 shadow-md bg-slate-400/70 dark:bg-navy-900/70 z-30'
              ></div>
              <div className='fixed flex flex-col justify-between h-full top-0 left-0 w-10/12  py-5 bg-white dark:bg-navy-700 z-40'>
                <div className=''>
                  <div className='flex flex-row px-5 justify-between items-center'>
                    <div className=''>
                      <LanguageSelector />
                    </div>
                    {/* DARK MODE BUTTON */}
                    <button className='' onClick={handleThemeSwitch}>
                      {theme === 'dark' ? <DarkButton /> : <LightButton />}
                    </button>
                  </div>
                  {/* SIDEMENU (MOBILE) */}
                  <div className=' flex flex-col gap-0.5 mt-5'>
                    {mobileMenuLinks.map((item) => (
                      <NavLink
                        onClick={() => setShowMobileMenu(false)}
                        className={
                          'bg-slate-200 dark:bg-navy-900 p-3 dark:hover:bg-navy-800  hover:bg-slate-300 text-gray-500 dark:text-navy-100 font-medium flex flex-row items-center gap-2'
                        }
                        to={item.path}
                      >
                        <span className=''>{item.icon()}</span>
                        <span className='capitalize'>{item.path}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
                {/* HEADERMENU (MOBILE) */}
                <div className=' flex flex-row justify-between  px-5 text-lg text-gray-500 dark:text-navy-100 md:hidden '>
                  {headerMenu.map((menu) => (
                    <Link
                      className='dark:bg-navy-500 hover:bg-slate-100 dark:hover:bg-navy-600 p-2  rounded-full'
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
        <div className='w-full hidden md:flex flex-row justify-end gap-3'>
          {/* LANGUAGE SWITCH */}
          <div className='md:flex hidden'>
            <LanguageSelector />
          </div>
          {/* DARK MODE BUTTON */}
          <button className='' onClick={handleThemeSwitch}>
            {theme === 'dark' ? <DarkButton /> : <LightButton />}
          </button>

          {/* HEADER MENU */}
          <div className='hidden md:flex flex-row gap-2  '>
            {headerMenu.map((menu, index) => (
              <Link key={index} to={'/'} className=''>
                <button className=' hover:bg-slate-100  p-2 text-gray-500 dark:text-navy-100 dark:hover:bg-navy-600   rounded-full'>
                  {menu.icon()}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </header>
      {/* MAIN */}
      <main className='flex flex-row h-[calc(100vh-56px)]'>
        {/* SIDEBAR */}
        <SideMenu
          sideLinks={sideLinks.filter((l) =>
            l.allow.includes(selectedMenu?.id)
          )}
        />
        {/* CONTENT AREA */}
        <div className='p-3 bg-slate-100 dark:bg-navy-900 w-full    overflow-hidden overflow-y-auto scroll-smooth'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
