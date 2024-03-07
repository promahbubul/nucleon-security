import TableData from "./TableData";
import TableHeading from "./TableHeading";

const Table = () => {
  return (
    <div className="w-max md:w-full">
      <TableHeading />
      <TableData />
    </div>
  );
};

export default Table;
