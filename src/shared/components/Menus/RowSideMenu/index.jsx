import { Link } from "react-router-dom";
import { tableSideMenu } from "../../../constants/menuLinks.constants";

const RowSideMenu = () => {
  // MENU OBJECT

  return (
    <div className="flex  flex-col gap-2">
      {tableSideMenu.map((menu, i) => (
        <Link
          className="p-2 text-gray-500 bg-white dark:hover:bg-navy-500 duration-500  dark:bg-navy-600 dark:text-slate-300 rounded-md text-xl"
          key={i}
          to={menu.path}
        >
          {menu.icon()}
        </Link>
      ))}
    </div>
  );
};

export default RowSideMenu;
