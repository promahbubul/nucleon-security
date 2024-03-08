import { useTranslation } from "react-i18next";
import Title from "../Title";

const AccessedProcess = ({ accessedProcesses }) => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-navy-700 px-2 py-1 rounded-md bg-white shadow-md w-2/12">
      <Title>{t("training.accessed")} (0)</Title>
      {/* CONTENT */}
      <div className="">
        {accessedProcesses.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-secondary font-semibold mt-3">
            {t("training.noAccess")}
          </p>
        )}
      </div>
    </div>
  );
};

export default AccessedProcess;
