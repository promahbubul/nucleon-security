import Loading from "../../../../shared/components/Loading";
import SectionContainer from "../../../../shared/components/SectionContainer";
import HeadingRow from "../../../../shared/components/Table/HeadingRow";
import TBody from "../../../../shared/components/Table/TableBody";
import TableData from "../../../../shared/components/Table/TableData";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import FilterSection from "./components/FilterSection";
import { FaObjectGroup, FaExchangeAlt } from "@assets/Icons/Icons";

const GroupsSection = ({ groups }) => {
  return (
    <SectionContainer
      className={"w-full "}
      icon={FaObjectGroup}
      title={"Groups"}
    >
      {/* FILTER SECTION */}
      <FilterSection />
      {/* TABLE SECTION */}
      <div className="my-5 max-h-[calc(100vh-250.8px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300 ">
        {/* TABLE HEADING */}
        <HeadingRow className={"mb-2 w-full"}>
          <TableHeading className={"col-span-12 "}>Name</TableHeading>
        </HeadingRow>
        {groups ? (
          groups?.map((group, index) => (
            <TBody
              onClick={() => setUpdateApplication(true)}
              key={index}
              className={"hover:bg-slate-100 dark:hover:bg-navy-700"}
            >
              <TableData className={"col-span-5"}>{group}</TableData>
            </TBody>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </SectionContainer>
  );
};

export default GroupsSection;
