import React from "react";

const SectionContainer = ({ children, icon, title, className }) => {
  return (
    <div className={`pb-2 bg-white rounded-md ${className}`}>
      <div
        className="bg-gray-200 border-t-4  rounded-t-md border-info p-3 flex flex-row items-center gap-2 border-b-secondary border-b
       text-black"
      >
        <span className="text-md">{icon && icon()}</span>
        <h3 className="text-md font-semibold text-dark-gray">{title}</h3>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};

export default SectionContainer;
