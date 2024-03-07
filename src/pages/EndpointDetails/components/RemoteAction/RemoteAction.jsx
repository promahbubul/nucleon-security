import SectionContainer from "../../../../shared/components/SectionContainer";
import { FaSatelliteDish } from "@assets/Icons/Icons";
import Filter from "./components/Filter";
import RemoteTable from "./components/Table/Table";
import { useState } from "react";

const RemoteAction = ({ remote_action }) => {
  return (
    <SectionContainer
      icon={FaSatelliteDish}
      title={" Remote actions "}
      className={"col-span-12 md:col-span-6 "}
      childrenClass={"overflow-auto"}
    >
      <Filter />
      <RemoteTable remote_action={remote_action} />
    </SectionContainer>
  );
};

export default RemoteAction;
