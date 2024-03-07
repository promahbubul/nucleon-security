import SectionContainer from "../../../../shared/components/SectionContainer";
import SectionFiltter from "../../../../shared/components/SectionFiltter";
import { FaObjectGroup } from "../../../../assets/Icons/Icons";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import HeadingRow from "../../../../shared/components/Table/HeadingRow";
import TBody from "../../../../shared/components/Table/TableBody";
import TableData from "../../../../shared/components/Table/TableData";
import Loading from "../../../../shared/components/Loading";
import CreateApplication from "./CreateApplication";
import { useState } from "react";
import UpdateApplication from "./UpdateApplication";

const ApplicationsSection = ({ applications }) => {
  // console.table(applications ? "" : applications?.name);
  const [applicationModal, setApplicationModal] = useState(false);
  const [updateApplication, setUpdateApplication] = useState(false);

  // const handleModal = () => {
  //   console.log("Hello");
  // };

  console.log(updateApplication);
  return (
    <SectionContainer
      className={"w-full "}
      icon={FaObjectGroup}
      title={"Applications"}
    >
      {/* FILTER SECTION */}
      <SectionFiltter
        handleModal={setApplicationModal}
        searchTotal={"114/114"}
        title={"applications"}
      />
      {/* TABLE */}
      <div className="my-5 max-h-[calc(100vh-280.67px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300 ">
        {/* TABLE HEADING */}
        <HeadingRow className={"mb-2 w-full"}>
          <TableHeading className={"col-span-2 "}>Logo</TableHeading>
          <TableHeading className={"col-span-7 "}>Name</TableHeading>
          <TableHeading className={"col-span-3 "}>Priority</TableHeading>
        </HeadingRow>
        {applications ? (
          applications?.map((application, index) => (
            <TBody
              onClick={() => setUpdateApplication(true)}
              key={index}
              className={"hover:bg-slate-100 dark:hover:bg-navy-700"}
            >
              <TableData className={"col-span-2 "}>
                <img src={application?.logo} alt="" className="h-7 w-7" />
              </TableData>
              <TableData className={"col-span-7 "}>
                {application?.name}
              </TableData>
              <TableData className={"col-span-3 "}>
                {application?.priority}
              </TableData>
            </TBody>
          ))
        ) : (
          <Loading />
        )}
      </div>
      {/* MODAL  [CREATE APPLICATION] */}
      <CreateApplication
        showModal={applicationModal}
        handleModal={setApplicationModal}
      ></CreateApplication>
      {/* MODAL  [UPDATE APPLICATION] */}
      <UpdateApplication
        handleModal={setUpdateApplication}
        showModal={updateApplication}
      ></UpdateApplication>
    </SectionContainer>
  );
};

export default ApplicationsSection;
