import { useState } from "react";
import TableRow from "./TableRow";

const TrainingTable = () => {
  const [showMore, setShowMore] = useState(true);
  const trainings = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleShowMore = (training) => {
    // const item = training;
    console.log(training);
  };

  return (
    <div className=" overflow-hidden overflow-x-auto w-full">
      <tbody className="flex flex-col gap-1 mt-3 w-max  md:w-full">
        {trainings.map((training, index) => (
          <TableRow
            handleShowMore={handleShowMore}
            training={training}
            key={index}
          />
        ))}
      </tbody>
    </div>
  );
};

export default TrainingTable;
