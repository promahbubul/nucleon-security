import React from "react";

const TableHeading = ({ children }) => {
  return (
    <h3 className="col-span-4 text-secondary font-medium text-sm border border-green-500">
      {children}
    </h3>
  );
};

export default TableHeading;
