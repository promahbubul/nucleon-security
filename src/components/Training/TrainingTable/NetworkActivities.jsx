import React from "react";
import Title from "../../ui/Title/Title";

const NetworkActivities = ({ networkActivities }) => {
  return (
    <div className="border px-2 py-1 rounded-md bg-white w-2/12">
      <Title>Network activities (3)</Title>
        {/* CONTENT */}
        <div className="">
            {networkActivities.length > 0 ? (
            ""
            ) : (
            <p className="text-base text-center italic text-secondary font-semibold mt-3">
                No network activity in the threat
            </p>
            )}
        </div>
    </div>
  );
};

export default NetworkActivities;
