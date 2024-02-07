import React from "react";
import Title from "../../ui/Title/Title";

const RelatedFiles = ({ relatedFiles }) => {
  return (
    <div className="border p-2 rounded-md bg-white w-3/12">
      <Title>Related files (0) </Title>
      {/* CONTENT */}
      <div className="">
        {relatedFiles.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-secondary font-semibold mt-3">
            No files related to the threat
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedFiles;
