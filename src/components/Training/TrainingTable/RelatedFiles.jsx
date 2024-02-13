import React from "react";
import Title from "../../ui/Title/Title";

const RelatedFiles = ({ relatedFiles }) => {
  return (
    <div className="dark:bg-navy-700 p-2  rounded-md bg-white  shadow-md w-3/12">
      <Title>Related files (0) </Title>
      {/* CONTENT */}
      <div className="">
        {relatedFiles.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-gray-500 dark:text-navy-100 font-semibold mt-3">
            No files related to the threat
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedFiles;
