import { FaQuestionCircle } from "react-icons/fa";
import OnButton from "@shared/components/Buttons/OnButton";
import { tableSettings } from "@shared/constants/policies.constants";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { snapShortOptions } from "../../../../../../shared/constants/policies.constants";
import CardRow from "./components/cardRow";
import { useState } from "react";

const Settings = ({ buttonSwitch }) => {
  const [frequency, setFrequency] = useState(79);
  const [limite, setLimite] = useState(47);
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
            {settings.title == "Self-absorption" ? (
              buttonSwitch ? (
                <>
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
                </>
              ) : (
                ""
              )
            ) : (
              <>
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
              </>
            )}
          </div>
        ))}

        <div className=" flex flex-row items-center gap-2  ">
          <div className="w-5/12">
            <h3 className="text-base text-slate-500 dark:text-navy-100 font-medium text-right">
              Snapshot frequency
            </h3>
          </div>
          <div className="w-2/12  flex   justify-center  ">
            <a
              data-tooltip-id={8}
              href=""
              data-tooltip-content={"Delay between each volume snapshot"}
            >
              <FaQuestionCircle />
            </a>
            <Tooltip
              style={{
                textAlign: "center",
                maxWidth: "200px",
              }}
              place="right"
              id={8}
            />
          </div>
          <select className="w-5/12 bg-slate-200 dark:bg-navy-500 cursor-pointer outline-none py-1 px-2 rounded-sm ">
            {snapShortOptions.map((snap, index) => (
              <option className="cursor-pointer" key={index} value={snap}>
                {snap}
              </option>
            ))}
          </select>
        </div>
        <CardRow
          tooltipid={9}
          tooltipContent={
            "Seconds between each server communication done by an endpoint"
          }
          title={"Heartbeat frequency"}
        >
          <div className="w-5/12  flex flex-row gap-1 items-center ">
            <input
              className="cursor-pointer w-11/12"
              type="range"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
            <span className="font-medium  text-sm md:text-base text-info">
              {frequency}
            </span>
          </div>
        </CardRow>
        <CardRow
          tooltipContent={
            "Maximum size (in Megabytes) of a file to send for analysis, if higher the anlaysis switch to offline condition"
          }
          tooltipid={10}
          title={"Analysis limit"}
        >
          <div className="w-5/12  flex flex-row gap-1 items-center ">
            <input
              className="cursor-pointer w-11/12"
              type="range"
              value={limite}
              onChange={(e) => setLimite(e.target.value)}
            />
            <span className="font-medium  text-sm md:text-base text-info">
              {limite}
            </span>
          </div>
        </CardRow>
      </div>
    </div>
  );
};

export default Settings;
