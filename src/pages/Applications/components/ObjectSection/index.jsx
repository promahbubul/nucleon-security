import SectionContainer from "@shared/components/SectionContainer";
import SectionFiltter from "@shared/components/SectionFiltter";
import { FaObjectUngroup } from "@assets/Icons/Icons";
import HeadingRow from "@shared/components/Table/HeadingRow";
import TableHeading from "@shared/components/Table/TableHeading";
import TBody from "@shared/components/Table/TableBody";
import TableData from "@shared/components/Table/TableData";
import Loading from "@shared/components/Loading";
import UpdateObject from "./UpdateObject";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ObjectsSection = ({ others }) => {
  const [updateObject, setUpdateObject] = useState(false);
  const [selectObject, setSelectObject] = useState({});
  const { t } = useTranslation();

  const handleObjects = (object) => {
    console.log(object);
    setUpdateObject(true);
    setSelectObject(object);
  };
  return (
    <SectionContainer
      className={"w-full"}
      icon={FaObjectUngroup}
      title={t("applications.section-title2")}
    >
      {/* FILTER SECTION */}
      <SectionFiltter
        searchTotal={"114/114"}
        title={t("applications.newObjects")}
      />
      {/* TABLE */}
      <div className="my-5 max-h-[calc(100vh-280.67px)] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-info hover:scrollbar-thumb-info/80 scrollbar-track-slate-300 ">
        {/* TABLE HEADING */}
        <HeadingRow className={"mb-2"}>
          <TableHeading className={"col-span-8 "}>
            {t("applications.name")}
          </TableHeading>
          <TableHeading className={"col-span-4 "}>
            {t("applications.type")}
          </TableHeading>
        </HeadingRow>
        {others ? (
          others?.map((other, index) => (
            <TBody
              onClick={() => handleObjects(other)}
              key={index}
              className={"hover:bg-slate-100 dark:hover:bg-navy-700"}
            >
              <TableData className={"col-span-8 "}>{other?.name}</TableData>
              <TableData className={"col-span-4 "}>{other?.type}</TableData>
            </TBody>
          ))
        ) : (
          <Loading />
        )}
      </div>
      {/* MODAL [UPDATE OBJECT] */}
      <UpdateObject
        selectObject={selectObject}
        showModal={updateObject}
        handleModal={setUpdateObject}
      ></UpdateObject>
    </SectionContainer>
  );
};

export default ObjectsSection;
