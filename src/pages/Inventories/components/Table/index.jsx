import { useEffect, useState } from "react";
import TableHeadingSection from "./TableHeading";
import TableDataSection from "./TableData";

const Table = () => {
  const [inventories, setInventories] = useState(null);
  useEffect(() => {
    fetch("/inventories.json")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="overflow-y-auto">
      <div className="w-max md:w-full">
        <TableHeadingSection />
        <TableDataSection inventories={inventories} />
      </div>
    </div>
  );
};

export default Table;
