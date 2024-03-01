import SectionContainer from "../../shared/components/SectionContainer";
import TopButtonSection from "./components/TopButtonSection";
import { FaObjectGroup, FaObjectUngroup } from "../../assets/Icons/Icons";

const Applications = () => {
  return (
    <div>
      {/* TOP BUTTON SECTION */}
      <TopButtonSection />

      <div className="flex flex-row gap-2 mt-3">
        <SectionContainer
          className={"w-full"}
          icon={FaObjectGroup}
          title={"Applications"}
        ></SectionContainer>
        <SectionContainer
          className={"w-full"}
          icon={FaObjectUngroup}
          title={"Objects"}
        ></SectionContainer>
      </div>
    </div>
  );
};

export default Applications;
