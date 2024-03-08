import { useTranslation } from "react-i18next";

const TableHeading = () => {
  const { t } = useTranslation();
  return (
    <div className=" grid grid-cols-12  text-gray-500 dark:text-navy-100  text-base font-bold text-left border-b-2 pb-2 border-b-gray-200 dark:border-b-gray-600  mt-3  w-auto md:w-full ">
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.creationDate")}
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.filename")}
      </h3>
      <h3 className=" col-span-3  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.fileType")}
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.fileSize")}
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.result")}
      </h3>
      <h3 className=" col-span-1  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        {t("analyze.status")}
      </h3>
    </div>
  );
};

export default TableHeading;
