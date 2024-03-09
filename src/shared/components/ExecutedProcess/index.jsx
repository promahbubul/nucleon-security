import { useTranslation } from "react-i18next";
import { FaLevelUpAlt } from "../../../assets/Icons/Icons";
import Title from "../Title";

const ExecutedProcess = ({ executedProcess }) => {
  const { t } = useTranslation();
  return (
    <div className=" p-2 rounded-md dark:bg-navy-700 bg-white w-5/12  shadow-md overflow-y-auto overflow-hidden">
      <Title>{t("training.executed")} (0)</Title>
      <div className="text-sm flex flex-col gap-1 h-[296px] overflow-hidden overflow-y-auto">
        {executedProcess.length > 0 ? (
          executedProcess.map((executed, index) => (
            <div key={index}>
              <p className="text-gray-500 dark:text-navy-100">cmd.exe</p>
              <div className="flex flex-row gap-2 items-center">
                <FaLevelUpAlt className="text-secondary rotate-90" />
                <p className="text-gray-500 dark:text-navy-100">
                  C:\WINDOWS\system32\cmd.exe / c "vrc"
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-base text-center font-nucleon-secondary italic text-gray-500 dark:text-navy-100 font-semibold mt-3">
            No files related to the threat
          </p>
        )}
      </div>
    </div>
  );
};

export default ExecutedProcess;
