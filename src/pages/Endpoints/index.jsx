import Status from "./components/Status";
import { useEffect, useState } from "react";
import EndPointTable from "./components/Table";

const Endpoints = () => {
  return (
    <div>
      {/* STATUS */}
      <Status />
      {/* CHART */}
      {/* TABLE */}
      {/* <Table /> */}
      <EndPointTable />
    </div>
  );
};

export default Endpoints;
