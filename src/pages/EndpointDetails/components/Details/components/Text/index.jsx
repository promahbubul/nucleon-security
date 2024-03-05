import React from "react";

const Text = ({ children }) => {
  return (
    <p className="col-span-9 text-base font-semibold text-navy-600 dark:text-navy-100">
      {children}
    </p>
  );
};

export default Text;
