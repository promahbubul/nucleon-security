import Table from "../../../../../../shared/components/Table";
import THead from "../../../../../../shared/components/Table/THead";
import TBody from "../../../../../../shared/components/Table/TableBody";
import TableHeading from "../../../../../../shared/components/Table/TableHeading";

const RemoteTable = ({ remote_action }) => {
  console.log(remote_action);
  return (
    <Table
      className={
        "h-[300px]  overflow-hidden overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info scrollbar-track-slate-200 pr-1 scrollbar-thin mt-2  w-max md:w-full"
      }
    >
      <THead>
        <TableHeading className={"col-span-3 "}>Request date</TableHeading>
        <TableHeading className={"col-span-3 "}>Type</TableHeading>
        <TableHeading className={"col-span-4 "}>Parameter</TableHeading>
        <TableHeading className={"col-span-2 "}>Status</TableHeading>
      </THead>
      {remote_action.map((remote, index) => (
        <TBody key={index} className={""}>
          <div className="col-span-3 flex flex-col ">
            <span className="">{remote.date}</span>
            <span className="">{remote.time}</span>
          </div>
          <p className="col-span-3">{remote.type}</p>
          <p className="col-span-4">{remote.parameter}</p>
          <p className="col-span-2">{remote.status}</p>
        </TBody>
      ))}
    </Table>
  );
};

export default RemoteTable;
