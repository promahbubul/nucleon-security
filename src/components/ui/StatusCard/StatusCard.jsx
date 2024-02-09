import React from "react";

const StatusCard = ({ icon, number, title, className }) => {
  return (
    <div
      className={`bg-white drop-shadow-md dark:bg-dark-gray rounded-md p-2 cursor-pointer ${className} flex flex-col justify-center items-center gap-2`}
    >
      <div className="flex flex-row gap-2">
        {/* icon */}
        <span className="text-info text-2xl md:text-4xl">{icon && icon()}</span>
        {/* number */}
        <span className="text-xl md:text-3xl text-silver-gray font-normal">
          {number}
        </span>
      </div>
      {/* title */}
      <h5 className="text-sm text-silver-gray  md:font-medium">{title}</h5>
    </div>
  );
};

export default StatusCard;
