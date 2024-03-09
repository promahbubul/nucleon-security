import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "../../../../shared/components/Table";
import THead from "../../../../shared/components/Table/THead";
import TBody from "../../../../shared/components/Table/TableBody";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import TableData from "../../../../shared/components/Table/TableData";

const TableSection = () => {
  const [entities, setEntities] = useState([]);
  const { t } = useTranslation("translation", "about");

  useEffect(() => {
    fetch("/entities.json")
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);
  return (
    <div className="mt-3 w-full  overflow-auto">
      <Table className={" h-[calc(100vh-220px)]  w-max md:w-full"}>
        <THead>
          <TableHeading className={"col-span-1 md:col-span-2"}>
            {t("dashboard.logo")}
          </TableHeading>
          <TableHeading className={"col-span-4"}>
            {t("dashboard.name")}
          </TableHeading>
          <TableHeading className={"col-span-3 md:col-span-2"}>
            {t("dashboard.lcenseCount")}
          </TableHeading>
          <TableHeading className={"col-span-4"}>
            {t("dashboard.domain")}
          </TableHeading>
        </THead>
        {entities.map((entitie, index) => (
          <TBody key={index} className={"  overflow-y-auto  overflow-hidden"}>
            <p className="col-span-1 md:col-span-2">
              <img src={entitie.logo} alt="" className="w-6" />
            </p>
            <TableData className=" col-span-4">{entitie.name}</TableData>
            <p className="col-span-3 md:col-span-2">{entitie.licenceCount}</p>
            <p className=" col-span-4">{entitie.domain}</p>
          </TBody>
        ))}
      </Table>
    </div>
  );
};

export default TableSection;
