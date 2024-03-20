import SectionContainer from "../../../../shared/components/SectionContainer";

import HeadingRow from "../../../../shared/components/Table/HeadingRow";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import { FaObjectGroup, FaExchangeAlt } from "../../../../assets/Icons/Icons";
import TBody from "../../../../shared/components/Table/TableBody";
import TableData from "../../../../shared/components/Table/TableData";
import Loading from "../../../../shared/components/Loading";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import FilterSection from "./components/FilterSection";

const ApplicationsSection = ({ accounts }) => {
  const [applicationModal, setApplicationModal] = useState(false);
  const [updateApplication, setUpdateApplication] = useState(false);
  const { t } = useTranslation();

  return (
    <SectionContainer
      className={"w-full  "}
      icon={FaObjectGroup}
      title={"Accounts"}
    >
      {/* FILTER SECTION */}
      <FilterSection />
      {/* TABLE */}
      <div className="my-5 max-h-[calc(100vh-250.8px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full   scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300 ">
        {/* TABLE HEADING */}
        <div className=" w-max sm:w-full">
          <HeadingRow className={"mb-2 w-full"}>
            <TableHeading className={"col-span-5 "}>Email</TableHeading>
            <TableHeading className={"col-span-4 "}>Frist Name</TableHeading>
            <TableHeading className={"col-span-3 "}>Last name</TableHeading>
          </HeadingRow>

          {accounts ? (
            accounts?.map((account, index) => (
              <TBody
                onClick={() => setUpdateApplication(true)}
                key={index}
                className={"hover:bg-slate-100  dark:hover:bg-navy-700 w-full"}
              >
                <TableData className={"col-span-5"}>{account?.email}</TableData>
                <TableData className={"col-span-4 "}>
                  {account?.firstname}
                </TableData>
                <TableData className={"col-span-3 "}>
                  {account?.lastname}
                </TableData>
              </TBody>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {/* MODAL  [CREATE APPLICATION] */}
      {/* <CreateApplication
        showModal={applicationModal}
        handleModal={setApplicationModal}
      ></CreateApplication> */}
      {/* MODAL  [UPDATE APPLICATION] */}
      {/* <UpdateApplication
        handleModal={setUpdateApplication}
        showModal={updateApplication}
      ></UpdateApplication> */}
    </SectionContainer>
  );
};

export default ApplicationsSection;
