import SectionContainer from "../../../../shared/components/SectionContainer";
import THead from "../../../../shared/components/Table/THead";
import TBody from "../../../../shared/components/Table/TableBody";

import { FaDesktop, FaTimes, FaCheck } from "../../../../assets/Icons/Icons";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import Table from "../../../../shared/components/Table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EndPointTable = () => {
  const [endpointData, setEndPointData] = useState(null);

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
      title={"Endpoints"}
      childrenClass={"overflow-auto"}
    >
      <Table className={"w-max md:w-full"}>
        {/* TABLE HEADING */}
        <THead>
          <TableHeading className={" col-span-2"}>Last connection</TableHeading>
          <TableHeading className={" col-span-2"}>Hostname</TableHeading>
          <TableHeading className={" col-span-4"}>OS version</TableHeading>
          <TableHeading className={" col-span-2"}>
            Endpoint version
          </TableHeading>
          <TableHeading className={" col-span-1"}>Policy</TableHeading>
          <TableHeading className={" col-span-1"}>Status</TableHeading>
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
