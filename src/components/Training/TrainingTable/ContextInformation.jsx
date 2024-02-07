import React from "react";
import Title from "../../ui/Title/Title";
import CardTable from "../../ui/CardTable/CardTable";

const ContextInformation = ({ context }) => {
  //   console.log(context);
  return (
    <div className="border p-2 rounded-md bg-white shadow-md w-full">
      <Title>Contact information</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={"Hostname"} content={context.host} />
        <CardTable heading={"User"} content={context.user} />
        <CardTable heading={"Host IP"} content={context.hostIp} />
        <CardTable heading={"Time"} content={context.time} />
        <CardTable heading={"Count"} content={context.count} />
        <CardTable heading={"Type"} content={context.type} />
        <CardTable heading={"Action"} content={context.action} />
        <CardTable heading={"Nofified"} content={context.notified} />
      </div>
    </div>
  );
};

export default ContextInformation;
