import { useEffect, useState } from "react";
import ApplicationsSection from "./components/ApplicationsSection";
import GroupsSection from "./components/GroupsSection";

const Permissions = () => {
  const [accounts, setAccounts] = useState(null);
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    fetch("/permissions.json")
      .then((res) => res.json())
      .then((data) => {
        setAccounts(data.accounts);
        setGroups(data.groups);
      });
  }, []);

  console.log(groups);
  return (
    <div className="flex  flex-col md:flex-row gap-2 mt-3">
      <ApplicationsSection accounts={accounts} />
      <GroupsSection groups={groups} />
    </div>
  );
};

export default Permissions;
