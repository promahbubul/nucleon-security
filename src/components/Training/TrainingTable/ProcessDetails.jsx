import React from "react";
import Title from "../../ui/Title/Title";
import CardTable from "../../ui/CardTable/CardTable";

const ProcessDetails = ({ processes }) => {
  // console.log(processes);
  return (
    <div className="dark:bg-navy-700 p-2 rounded-md bg-white shadow-md w-full">
      <Title>Process details </Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={"PID"} content={processes.pId} />
        <CardTable heading={"PPID"} content={processes.ppId} />
        <CardTable heading={"Path"} content={processes.path} />
        <CardTable heading={"Signature"} content={processes.signature} />
        <CardTable heading={"Device"} content={processes.device} />
        <CardTable heading={"Size"} content={processes.size} />
        <CardTable heading={"md5"} content={processes.md5} />
        <CardTable heading={"sha1"} content={processes.sha1} />
        <CardTable heading={"sha56"} content={processes.sha56} />
      </div>
    </div>
  );
};

export default ProcessDetails;
