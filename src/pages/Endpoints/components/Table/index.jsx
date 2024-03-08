import SectionContainer from "../../../../shared/components/SectionContainer";
import THead from "../../../../shared/components/Table/THead";
import TBody from "../../../../shared/components/Table/TableBody";

import { FaDesktop, FaTimes, FaCheck } from "../../../../assets/Icons/Icons";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import Table from "../../../../shared/components/Table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EndPointTable = () => {
  const [endpointData, setEndPointData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/endpoint.json")
      .then((res) => res.json())
      .then((data) => setEndPointData(data));
  }, []);

  console.log(endpointData);
  return (
    <SectionContainer
      className={"w-full mt-3"}
      icon={FaDesktop}
      title={t("endpoints.section-title")}
      childrenClass={"overflow-auto"}
    >
      <Table className={"w-max md:w-full"}>
        {/* TABLE HEADING */}
        <THead>
          <TableHeading className={" col-span-2"}>
            {t("endpoints.lastConnection")}
          </TableHeading>
          <TableHeading className={" col-span-2"}>
            {t("endpoints.hostname")}
          </TableHeading>
          <TableHeading className={" col-span-4"}>
            {t("endpoints.osVersion")}
          </TableHeading>
          <TableHeading className={" col-span-2"}>
            {t("endpoints.endpointVersion")}
          </TableHeading>
          <TableHeading className={" col-span-1"}>
            {t("endpoints.policy")}
          </TableHeading>
          <TableHeading className={" col-span-1"}>
            {t("endpoints.status")}
          </TableHeading>
        </THead>
        {endpointData &&
          endpointData.map((endpoint, index) => (
            <Link
              target="_blank"
              key={index}
              to={"/dashboard/endpoints/details"}
            >
              <TBody className={""}>
                <div className="col-span-2 flex flex-col ">
                  <span className="">{endpoint?.date}</span>
                  <span className="">{endpoint?.time}</span>
                </div>
                <p className="col-span-2">{endpoint?.hostname}</p>
                <p className="col-span-4">{endpoint?.os_version}</p>
                <p className="col-span-2">{endpoint?.endpoint_version}</p>
                <p className="col-span-1 ">{endpoint?.policy}</p>
                <p className="col-span-1 ">
                  {endpoint?.status === "Enable" ? (
                    <div className="flex flex-row items-center gap-1">
                      <FaCheck className="text-lg text-success" />
                      <span className="">{endpoint?.status}</span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-1">
                      <FaTimes className="text-lg text-danger" />
                      <span className="">{endpoint?.status}</span>
                    </div>
                  )}
                </p>
              </TBody>
            </Link>
          ))}
      </Table>
    </SectionContainer>
  );
};

export default EndPointTable;
