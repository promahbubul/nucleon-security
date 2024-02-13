import React from "react";

const Title = ({ children }) => {
  return (
    <h3 className="dark:text-navy-100 text-gray-500 p-1 text-base font-medium  border-b-gray-200 border-b dark:border-gray-600 ">
      {children}
    </h3>
  );
};

export default Title;
