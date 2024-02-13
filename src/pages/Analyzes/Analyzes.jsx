import React from "react";
import Status from "../../components/Analyzes/Status";
import { FaList } from "../../assets/Icons/Icons";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";

const Analyzes = () => {
  return (
    <div>
      <div className="">
        {/* STATUS */}
        <Status />
        {/* TABLE */}
        <SectionContainer
          title={"Analyzes"}
          icon={FaList}
          className={"mt-3"}
        ></SectionContainer>
      </div>
    </div>
  );
};

export default Analyzes;
