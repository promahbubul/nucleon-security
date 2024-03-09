import { Link } from "react-router-dom";
import {
  FaCheck,
  IoWarning,
  IoClose,
  FaChevronDown,
  FaSitemap,
  FaMagic,
  FaShieldAlt,
  FaSatelliteDish,
} from "../../../assets/Icons/Icons";
import ContextInformation from "../ContextInformation";
import ProcessDetails from "../ProcessDetails";
import FileDetails from "../FileDetails";
import { useTranslation } from "react-i18next";

const RelatedEvents = ({ relatedEvents }) => {
  const { t } = useTranslation();
  const eventsMenu = [
    { path: "/", icon: FaSitemap },
    { path: "/", icon: FaMagic },
    { path: "/", icon: FaShieldAlt },
    { path: "/", icon: FaSatelliteDish },
  ];

  //   console.log(relatedEvents);
  return (
    <div className="bg-white dark:bg-navy-700  shadow-md  px-2 py-1 rounded-md relative">
      <input
        type="checkbox"
        name=""
        id=""
        className="absolute w-full top-0 peer opacity-0 inset-x-0 h-9 cursor-pointer"
      />
      <h3 className="text-gray-500 dark:text-navy-100 p-1 text-base peer-checked:border-b border-b-slate-200  dark:peer-checked:border-slate-600  font-medium ">
        {t("training.relatedEvents")} (3)
      </h3>
      <div className=" peer-checked:block hidden">
        <div className="tbody">
          <div className=" grid grid-cols-12 text-gray-500 dark:text-navy-100 text-base font-bold text-left border-b-2 border-gray-200 pb-3 dark:border-b-slate-600 mt-3 ">
            <p className=" col-span-2  hover:text-gray-400 cursor-pointer">
              {t("training.date")}
            </p>
            <p className=" col-span-1  hover:text-gray-400 cursor-pointer">
              {t("training.host")}
            </p>
            <p className=" col-span-1  hover:text-gray-400 cursor-pointer">
              {t("training.type")}
            </p>
            <p className=" col-span-4  hover:text-gray-400 cursor-pointer">
              {t("training.process")}
            </p>
            <p className=" col-span-2  hover:text-black cursor-pointer">
              {t("training.target")}
            </p>
            <p className=" col-span-2  hover:text-black cursor-pointer">
              {t("training.action")}
            </p>
          </div>
          {relatedEvents.map((event, index) => (
            <div
              key={index}
              className="last:border-b-0  duration-300  text-sm border-b dark:border-b-slate-600 text-black relative"
            >
              <input
                type="checkbox"
                className="absolute top-0 right-0 z-10 opacity-0  peer h-10 w-full cursor-pointer
                      "
              />
              <FaChevronDown className="absolute text-gray-500 dark:text-navy-100 right-6 top-3 peer-checked:rotate-180" />

              <div className="grid grid-cols-12 hover:bg-slate-100 dark:hover:bg-navy-600  py-2 ">
                <p className="col-span-2 text-gray-500 dark:text-navy-100">
                  {event.date} <span className="">{event.time}</span>
                </p>
                <p className="col-span-1 text-gray-500 dark:text-navy-100">
                  {event.host}
                </p>
                <p className="col-span-1 text-gray-500 dark:text-navy-100">
                  {event.type}
                </p>
                <p className="col-span-4 text-gray-500 dark:text-navy-100">
                  {event.process}
                </p>
                <p className="col-span-2 text-gray-500 dark:text-navy-100">
                  {event.target}
                </p>
                <p className="col-span-2 flex flex-row gap-2 items-center text-gray-500 dark:text-navy-100">
                  {event.action == "Allowed" ? (
                    <FaCheck className="text-xl font-bold text-success" />
                  ) : event.action == "Blocked" ? (
                    <IoClose className="text-xl font-bold text-danger" />
                  ) : (
                    <IoWarning className="text-xl font-bold text-warning" />
                  )}
                  {event.action}
                </p>
              </div>
              <div className="hidden flex-row gap-2 peer-checked:flex dark:bg-navy-800 bg-slate-200 py-2 px-3">
                {/* event menu */}
                <div className=" flex flex-col gap-2">
                  {eventsMenu.map((menu, i) => (
                    <Link
                      className="p-2  w- bg-white dark:hover:bg-navy-500  dark:bg-navy-600 dark:text-slate-300 text-gray-500  rounded-md text-xl"
                      key={i}
                      to={menu.path}
                    >
                      {menu.icon()}
                    </Link>
                  ))}
                </div>
                {/* CONTACT INFO */}
                <ContextInformation context={event?.context} />
                {/* PROCESS DETAILS */}
                <ProcessDetails processes={event?.processes} />
                {/* FILE DETAILS */}
                <FileDetails file={event?.file} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedEvents;
