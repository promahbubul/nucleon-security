import Loading from "../../../../../shared/components/Loading";
import TBody from "../../../../../shared/components/Table/TableBody";
import TableData from "../../../../../shared/components/Table/TableData";
import DataDetails from "../DataDetails";

const TableDataSection = ({ inventories }) => {
  return (
    <div className=" max-h-[calc(100vh-338.4px)] overflow-hidden overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info scrollbar-track-slate-200 scrollbar-thin ">
      {inventories ? (
        inventories.map((inventory, index) => (
          <TBody key={index} className={"relative"}>
            <input
              type="checkbox"
              className="border-2 border-red-500 absolute inset-x-0 h-12 opacity-0 w-full  cursor-pointer peer"
            />
            <TableData className={"col-span-1"}>
              {inventory?.hostname}
            </TableData>
            <TableData className={"col-span-2"}>
              {inventory?.filename}
            </TableData>
            <TableData className={"col-span-4"}>
              {inventory?.filepath}
            </TableData>
            <TableData className={"col-span-3"}>
              {inventory?.filetype}
            </TableData>
            <TableData className={"col-span-1"}>
              {inventory?.filesize}
            </TableData>
            <TableData className={"col-span-1"}>{inventory?.verdict}</TableData>
            <DataDetails inventory={inventory} />
          </TBody>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TableDataSection;
