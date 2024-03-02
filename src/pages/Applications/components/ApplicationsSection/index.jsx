import SectionContainer from "../../../../shared/components/SectionContainer";
import SectionFiltter from "../../../../shared/components/SectionFiltter";
import { FaObjectGroup } from "../../../../assets/Icons/Icons";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import HeadingRow from "../../../../shared/components/Table/HeadingRow";
import TableBody from "../../../../shared/components/Table/TableBody";
import TableData from "../../../../shared/components/Table/TableData";
import Loading from "../../../../shared/components/Loading";

const ApplicationsSection = ({ applications }) => {
  // console.table(applications ? "" : applications?.name);
  return (
    <SectionContainer
      className={"w-full "}
      icon={FaObjectGroup}
      title={"Applications"}
    >
      {/* FILTER SECTION */}
      <SectionFiltter searchTotal={"114/114"} title={"applications"} />
      {/* TABLE */}
      <div className="my-5 max-h-[calc(100vh-280.67px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300  ">
        {/* TABLE HEADING */}
        <HeadingRow className={"mb-2"}>
          <TableHeading className={"col-span-2 "}>Logo</TableHeading>
          <TableHeading className={"col-span-7 "}>Name</TableHeading>
          <TableHeading className={"col-span-3 "}>Priority</TableHeading>
        </HeadingRow>
        {applications ? (
          applications?.map((application, index) => (
            <TableBody key={index} className={"hover:bg-slate-200"}>
              <TableData className={"col-span-2 "}>
                <img src={application?.logo} alt="" className="h-7 w-7" />
              </TableData>
              <TableData className={"col-span-7 "}>
                {application?.name}
              </TableData>
              <TableData className={"col-span-3 "}>
                {application?.priority}
              </TableData>
            </TableBody>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </SectionContainer>
  );
};

export default ApplicationsSection;
