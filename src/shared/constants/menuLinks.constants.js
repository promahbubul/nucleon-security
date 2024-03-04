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
  MdOutlineInventory,
  IoMdApps,
  FaBook,
  FaBell,
  FaSitemap,
  FaGlobeEurope,
  FaFlask,
  FaSkull,
  FaBox,
  FaPowerOff,
  FaHistory,
  FaArchive,
  FaSatelliteDish,
  FaMagic,
  FaShieldAlt,
  FiRefreshCcw,
  FaDownload,
  FaFolderOpen,
  IoReload,
  TbLetterV,
} from "../../assets/Icons/Icons";

export const sideLinks = [
  {
    path: "/dashboard/training",
    title: "Training",
    icon: AiFillDashboard,
    allow: [2, 3],
  },
  { path: "/dashboard/events", title: "Events", icon: IoSearch, allow: [2, 3] },
  {
    path: "/dashboard/analyzes",
    title: "Analyzes",
    icon: ImLab,
    allow: [2, 3],
  },
  {
    path: "/dashboard/policies",
    title: "Policies",
    icon: RiBankFill,
    allow: [2, 3],
  },
  {
    path: "/dashboard/endpoints",
    title: "Endpoints",
    icon: ImDisplay,
    allow: [2, 3],
  },
  {
    path: "/dashboard/vulnerabilities",
    title: "Vulnerabilities",
    icon: FaLockOpen,
    allow: [2, 3],
  },
  {
    path: "/dashboard/capacity",
    title: "Capacity",
    icon: MdInsertChart,
    allow: [2, 3],
  },
  {
    path: "/dashboard/inventories",
    title: "Inventories",
    icon: MdOutlineInventory,
    allow: [2, 3],
  },
  {
    path: "/dashboard/applications",
    title: "Applications",
    icon: IoMdApps,
    allow: [2, 3],
  },
];

export const mobileMenuLinks = [
  { path: "dashboard", icon: AiFillDashboard },
  { path: "events", icon: IoSearch },
  { path: "analyzes", icon: ImLab },
  { path: "policies", icon: RiBankFill },
  { path: "endpoints", icon: ImDisplay },
  { path: "vulnerabilities", icon: FaLockOpen },
  { path: "capacity", icon: MdInsertChart },
  { path: "inventories", icon: MdOutlineInventory },
  { path: "applications", icon: IoMdApps },
];

// HEADER MENUS
export const headerMenu = [
  { path: "/", icon: IoMdSettings },
  { path: "/", icon: FaBell },
  { path: "/", icon: FaBook },
  { path: "/dashboard/accounts", icon: FaUser },
  { path: "/", icon: RiLogoutBoxRLine },
];

// TABLE SIDEMENU LINKS
export const tableSideMenu = [
  { path: "/dashboard/investigate", icon: FaSitemap },
  { path: "/dashboard/worldmap", icon: FaGlobeEurope },
  { path: "/dashboard/analyzes", icon: FaFlask },
  { path: "/dashboard/endpoints", icon: FaSkull },
  { path: "/dashboard/endpoints", icon: FaBox },
  { path: "/dashboard/endpoints", icon: FaPowerOff },
  { path: "/dashboard/endpoints", icon: FaHistory },
  { path: "", icon: FaArchive },
];

// EVENTS TABLE SIDEMENU LINKS
export const eventTableMenu = [
  { path: "/dashboard/investigate", icon: FaSitemap },
  { path: "#", icon: FaMagic },
  { path: "#", icon: FaShieldAlt },
  { path: "#", icon: FaSatelliteDish },
];

// ANALYSIS TABLE SIDEMENU LINKS
export const analysisTableMenu = [
  { path: "/dashboard/investigate", icon: FiRefreshCcw },
  { path: "#", icon: FaDownload },
  { path: "#", icon: IoSearch },
  { path: "#", icon: FaFolderOpen },
  { path: "#", icon: TbLetterV },
  { path: "#", icon: IoReload },
];
