import { customApplications } from "../../../../../../../shared/constants/policies.constants";
import DropDownSelect from "../../../../../../../shared/components/DropDownSelect";
import TableTitle from "../../../../../../../shared/components/Table/TableTitle";

const CustomApplications = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-row items-center gap-3">
        <TableTitle className="">Custom</TableTitle>
        <DropDownSelect options={customApplications} />
      </div>
    </div>
  );
};

export default CustomApplications;
