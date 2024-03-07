import SectionContainer from "../../shared/components/SectionContainer";
import { FaUser, FaCheck, FaTimes } from "../../assets/Icons/Icons";
import Table from "../../shared/components/Table";
import THead from "../../shared/components/Table/THead";
import TableHeading from "../../shared/components/Table/TableHeading";
import TBody from "../../shared/components/Table/TableBody";
import { useEffect, useState } from "react";
import Loading from "../../shared/components/Loading";
import UpdateAccount from "./components/UpdateAccount";

const Accounts = () => {
  const [accounts, setAccounts] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/accounts.json")
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  }, []);
  return (
    <>
      <SectionContainer
        icon={FaUser}
        title={"Accounts"}
        childrenClass={"overflow-auto"}
      >
        <Table className={"w-max md:w-full "}>
          <THead>
            <TableHeading className={"col-span-2"}>Email</TableHeading>
            <TableHeading className={"col-span-1"}>First name</TableHeading>
            <TableHeading className={"col-span-1"}>Last name</TableHeading>
            <TableHeading className={"col-span-2 "}>
              Endpoint notification
            </TableHeading>
            <TableHeading className={"col-span-2 "}>
              License notification
            </TableHeading>
            <TableHeading className={"col-span-2"}>
              Threat notification
            </TableHeading>
            <TableHeading className={"col-span-2"}>
              One-Time password
            </TableHeading>
          </THead>
          {accounts ? (
            accounts.map((account, index) => (
              <TBody
                className={""}
                onClick={() => setShowModal(true)}
                key={index}
              >
                <p className={"col-span-2"}>{account?.email}</p>
                <p className={"col-span-1"}>{account?.first_name}</p>
                <p className={"col-span-1"}>{account?.last_name}</p>
                <p className={"col-span-2 "}>
                  {account?.endpoint_notification === true ? (
                    <div className="flex flex-row items-center gap-2">
                      <FaCheck className="text-sm text-success" />
                      <span className="">Enabled</span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-2">
                      <FaTimes className="text-sm text-danger" />
                      <span className="">Disabled</span>
                    </div>
                  )}
                </p>
                <p className={"col-span-2 "}>
                  {account?.license_notification === true ? (
                    <div className="flex flex-row items-center gap-2">
                      <FaCheck className="text-sm text-success" />
                      <span className="">Enabled</span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-2">
                      <FaTimes className="text-sm text-danger" />
                      <span className="">Disabled</span>
                    </div>
                  )}
                </p>
                <p className={"col-span-2"}>
                  {account?.threat_notification === true ? (
                    <div className="flex flex-row items-center gap-2">
                      <FaCheck className="text-sm text-success" />
                      <span className="">Enabled</span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-2">
                      <FaTimes className="text-sm text-danger" />
                      <span className="">Disabled</span>
                    </div>
                  )}
                </p>
                <p className={"col-span-2"}>{account?.password}</p>
              </TBody>
            ))
          ) : (
            <Loading />
          )}
        </Table>
      </SectionContainer>
      <UpdateAccount showModal={showModal} handleModal={setShowModal} />
    </>
  );
};

export default Accounts;
