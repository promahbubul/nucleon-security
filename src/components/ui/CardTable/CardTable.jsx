import React from "react";

const CardTable = ({ heading, content }) => {
  return (
    <div className="grid grid-cols-12  gap-2">
      <h3 className="col-span-4 text-secondary font-medium text-sm  ">
        {heading}
      </h3>
      <p className="col-span-8 overflow-hidden text-sm  text-black font-normal  ">
        {content}
      </p>
    </div>
  );
};

export default CardTable;
