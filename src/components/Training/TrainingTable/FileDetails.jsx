import React from "react";
import Title from "../../ui/Title/Title";
import CardTable from "../../ui/CardTable/CardTable";

const FileDetails = ({ file }) => {
  // console.log(file);
  return (
    <div className="border px-2 py-1 rounded-md bg-white shadow-md w-full">
      <Title>File details</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={"PID"} content={file.pId} />
        <CardTable heading={"Path"} content={file.path} />
        <CardTable heading={"Command"} content={file.command} />
        <CardTable heading={"Signature"} content={file.signature} />
        <CardTable heading={"Device"} content={file.device} />
        <CardTable heading={"Size"} content={file.size} />
        <CardTable heading={"md5"} content={file.md5} />
        <CardTable heading={"sha1"} content={file.sha1} />
        <CardTable heading={"sha256"} content={file.sha256} />
      </div>
    </div>
  );
};

export default FileDetails;
