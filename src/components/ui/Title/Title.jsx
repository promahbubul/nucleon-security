import React from "react";

const Title = ({ children }) => {
  return (
        <h3 className="text-secondary p-1 text-base font-medium border-b border-slate-200">
        {children}
        </h3>
  );
};

export default Title;
