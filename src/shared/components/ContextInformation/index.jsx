import CardTable from "../Table/CardTable";
import Title from "../Title";

const ContextInformation = ({ context }) => {
  //   console.log(context);
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>Context information</Title>
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
