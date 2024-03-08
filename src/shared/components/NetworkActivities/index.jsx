import { useTranslation } from "react-i18next";
import Title from "../Title";

const NetworkActivities = ({ networkActivities }) => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-navy-700 px-2 py-1 rounded-md bg-white shadow-md w-2/12">
      <Title>{t("training.network")} (3)</Title>
      {/* CONTENT */}
      <div className="">
        {networkActivities.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-gray-500 dark:text-navy-100 font-semibold mt-3">
            {t("training.noNetwork")}
          </p>
        )}
      </div>
    </div>
  );
};

export default NetworkActivities;
