import { useTranslation } from "react-i18next";
import CustomApplications from "./CustomApplications";
import DefaultApplications from "./DefaultApplications";

const Applications = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-7/12">
      <h3 className="text-md text-base border-b-gray-200 dark:border-b-navy-500 py-2 border-b font-bold text-center dark:text-navy-100 text-gray-500">
        {t("policies.applications")}
      </h3>
      <CustomApplications />
      <DefaultApplications />
    </div>
  );
};

export default Applications;
