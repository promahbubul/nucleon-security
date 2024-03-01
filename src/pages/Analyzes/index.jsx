import { FaList } from "../../assets/Icons/Icons";
import SectionContainer from "../../shared/components/SectionContainer";

import Status from "../Events/Status";
import Table from "./components/Table";

const Analyzes = () => {
  return (
    <div>
      <div className="">
        {/* STATUS */}
        <Status />
        {/* TABLE */}
        <SectionContainer title={"Analyzes"} icon={FaList} className={"mt-3"}>
          <Table />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Analyzes;
