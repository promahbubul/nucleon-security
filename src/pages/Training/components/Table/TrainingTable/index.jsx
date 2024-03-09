import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const [showMore, setShowMore] = useState(true);
  const [trainings, setTrainings] = useState(null);
  useEffect(() => {
    fetch("/training.json")
      .then((res) => res.json())
      .then((data) => setTrainings(data));
  }, []);

  const handleShowMore = (training) => {
    // const item = training;
    console.log(training);
  };

  return (
    <div className=" overflow-hidden overflow-x-auto w-full">
      <tbody className="flex flex-col gap-1 mt-3 w-max  md:w-full">
        {trainings?.map((training, index) => (
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

export default Table;
