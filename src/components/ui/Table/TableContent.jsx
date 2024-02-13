import React from "react";

const TableContent = ({ children }) => {
  return (
    <p className="col-span-8  text-black text-sm font-normal border border-blue-500">
      {children}
    </p>
  );
};

export default TableContent;
