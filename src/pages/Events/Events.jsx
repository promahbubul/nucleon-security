import React from "react";
import Status from "../../components/Events/Status";
import EventTable from "../../components/Events/EventTable";

const Events = () => {
  return (
    <div className="">
      {/* STATUS */}
      <Status />
      {/* CHART */}

      {/* TABLE */}
      <EventTable />
    </div>
  );
};

export default Events;
