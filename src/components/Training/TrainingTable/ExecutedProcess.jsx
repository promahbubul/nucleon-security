import React from "react";
import { FaLevelUpAlt } from "../../../assets/Icons/Icons";
import Title from "../../ui/Title/Title";

const ExecutedProcess = ({ executedProcess }) => {
  return (
    <div className="border p-2 rounded-md bg-white w-5/12  shadow-md overflow-y-auto overflow-hidden">
      <Title>Executed processes (0)</Title>
      <div className="text-sm flex flex-col gap-1 h-[296px] overflow-hidden overflow-y-auto">
        {executedProcess.length > 0 ? (
          executedProcess.map((executed, index) => (
            <div key={index}>
              <p className="">cmd.exe</p>
              <div className="flex flex-row gap-2 items-center">
                <FaLevelUpAlt className="text-secondary rotate-90" />
                <p className="">C:\WINDOWS\system32\cmd.exe / c "vrc"</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-base text-center italic text-secondary font-semibold mt-3">
            No files related to the threat
          </p>
        )}
      </div>
    </div>
  );
};

export default ExecutedProcess;