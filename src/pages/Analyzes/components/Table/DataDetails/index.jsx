import { Link } from "react-router-dom";
import { analysisTableMenu } from "@shared/constants/menuLinks.constants";
import Details from "./Details";
import MetaData from "./MetaData";

const DataDetails = ({ analyze }) => {
  return (
    <div className="hidden flex-row gap-2 peer-checked:flex bg-slate-200 dark:bg-navy-900 py-2 px-3">
      {/* event menu */}
      <div className=" flex flex-col gap-2">
        {analysisTableMenu.map((menu, i) => (
          <Link
            className="p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600 rounded-md text-xl"
            key={i}
            to={menu.path}
          >
            {menu.icon()}
          </Link>
        ))}
      </div>
      <Details details={analyze?.details} />
      <MetaData metaData={analyze?.metaData} />
    </div>
  );
};

export default DataDetails;
