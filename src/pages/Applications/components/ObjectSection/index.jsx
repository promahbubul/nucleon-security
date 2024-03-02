import SectionContainer from "../../../../shared/components/SectionContainer";
import SectionFiltter from "../../../../shared/components/SectionFiltter";
import { FaObjectUngroup } from "../../../../assets/Icons/Icons";
import HeadingRow from "../../../../shared/components/Table/HeadingRow";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import TableBody from "../../../../shared/components/Table/TableBody";
import TableData from "../../../../shared/components/Table/TableData";
import Loading from "../../../../shared/components/Loading";

const ObjectsSection = ({ others }) => {
  return (
    <SectionContainer
      className={"w-full"}
      icon={FaObjectUngroup}
      title={"Objects"}
    >
      {/* FILTER SECTION */}
      <SectionFiltter searchTotal={"114/114"} title={"object"} />
      {/* TABLE */}
      <div className="my-5 max-h-[calc(100vh-280.67px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300 ">
        {/* TABLE HEADING */}
        <HeadingRow className={"mb-2"}>
          <TableHeading className={"col-span-8 "}>Name</TableHeading>
          <TableHeading className={"col-span-4 "}>Type</TableHeading>
        </HeadingRow>
        {others ? (
          others?.map((other, index) => (
            <TableBody key={index} className={"hover:bg-slate-200"}>
              <TableData className={"col-span-8 "}>{other?.name}</TableData>
              <TableData className={"col-span-4 "}>{other?.type}</TableData>
            </TableBody>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </SectionContainer>
  );
};

export default ObjectsSection;
