import DropDownSelect from "../../../../../../../shared/components/DropDownSelect";
import TableTitle from "../../../../../../../shared/components/Table/TableTitle";
import { defaultApplications } from "../../../../../../../shared/constants/policies.constants";

const DefaultApplications = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-row items-center gap-3">
        <TableTitle className="">Deafult</TableTitle>
        <DropDownSelect options={defaultApplications} />
      </div>
    </div>
  );
};

export default DefaultApplications;
