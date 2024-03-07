import SectionContainer from "../../../../shared/components/SectionContainer";
import { FaDesktop } from "@assets/Icons/Icons";
import Table from "../../../../shared/components/Table";
import TableHeading from "../../../../shared/components/Table/TableHeading";
import THead from "../../../../shared/components/Table/THead";
import DetailLabel from "./components/DetailLabel";
import Text from "./components/Text";

const Details = ({ details }) => {
  console.log(details);
  return (
    <SectionContainer
      childrenClass={" overflow-auto"}
      icon={FaDesktop}
      title={details?.endpoint}
      className={"col-span-12 md:col-span-6 "}
    >
      <div className="w-max md:w-full flex flex-row gap-5">
        {/* left */}
        <div className="grid grid-cols-12 bord items-center gap-3 ">
          <DetailLabel>Domain</DetailLabel>
          <Text>{details.domain}</Text>
          <DetailLabel>OS</DetailLabel>
          <Text>{details.os}</Text>
          <DetailLabel>SEEN</DetailLabel>
          <Text>{details.seen}</Text>
          <DetailLabel>Ip address</DetailLabel>
          <Text>{details.ip_address}</Text>
          <DetailLabel>Version</DetailLabel>
          <Text>{details.version}</Text>
        </div>
        {/* left */}
        <div className="grid grid-cols-12 items-center  gap-3">
          <DetailLabel>Status</DetailLabel>
          <select
            name=""
            id=""
            className="col-span-9 outline-none border border-slate-300 rounded-sm p-1 text-base font-semibold"
          >
            <option value="" className="">
              Enable
            </option>
            <option value="" className="">
              Disable
            </option>
          </select>
          <DetailLabel>Policy</DetailLabel>
          <select
            name=""
            id=""
            className="col-span-9 outline-none border border-slate-300 rounded-sm p-1 text-base font-semibold"
          >
            <option value="" className="">
              Protection
            </option>
            <option value="" className="">
              Policy 1
            </option>
          </select>
          <DetailLabel>Debug</DetailLabel>
          <select
            name=""
            id=""
            className="col-span-9 outline-none border border-slate-300 rounded-sm p-1 text-base font-semibold"
          >
            <option value="" className="">
              Protection
            </option>
            <option value="" className="">
              Policy 1
            </option>
          </select>
          <DetailLabel>Upgrade</DetailLabel>
          <select
            name=""
            id=""
            className="col-span-9 outline-none border border-slate-300 rounded-sm p-1 text-base font-semibold"
          >
            <option value="" className="">
              Protection
            </option>
            <option value="" className="">
              Policy 1
            </option>
          </select>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Details;
