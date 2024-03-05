import SectionContainer from "../../../../shared/components/SectionContainer";
import { FaSatelliteDish } from "@assets/Icons/Icons";
import Filter from "./components/Filter";
import RemoteTable from "./components/Table/Table";

const RemoteAction = ({ remote_action }) => {
  return (
    <SectionContainer
      icon={FaSatelliteDish}
      title={" Remote actions"}
      className={"col-span-6"}
    >
      <Filter />
      <RemoteTable remote_action={remote_action} />
    </SectionContainer>
  );
};

export default RemoteAction;
