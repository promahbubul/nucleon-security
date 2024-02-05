import React from "react";

const Button = ({ children, className, icon }) => {
  return (
    <button
      className={`rounded-md  ${className} flex flex-row gap-1 items-center`}
    >
      {icon && icon()}
      {children}
    </button>
  );
};

export default Button;
