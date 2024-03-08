import { FaQuestionCircle } from "react-icons/fa";
import OnButton from "../../../../../../shared/components/Buttons/OnButton";
import { tableSettings } from "../../../../../../shared/constants/policies.constants";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-5/12 flex flex-col">
      <h3 className="text-md text-base border-b-gray-200 dark:border-b-navy-500 py-2 border-b font-bold text-center dark:text-navy-100 text-gray-500">
        {t("policies.settings")}
      </h3>

      <div className=" flex flex-col gap-2 mt-5">
        {/* TABLE */}
        {tableSettings.map((settings, index) => (
          <div key={index} className=" flex flex-row items-center gap-2  ">
            <div className="w-5/12">
              <h3 className="text-base text-slate-500 dark:text-navy-100 font-medium text-right">
                {settings.title}
              </h3>
            </div>
            <div className="w-2/12  flex   justify-center  ">
              <a
                data-tooltip-id={settings.id}
                href=""
                data-tooltip-content={settings.caption}
              >
                <FaQuestionCircle />
              </a>
              <Tooltip
                style={{
                  textAlign: "center",
                  maxWidth: "200px",
                }}
                place="right"
                id={settings.id}
              />
            </div>
            <div className="w-5/12  ">
              <OnButton className={"bg-success"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
