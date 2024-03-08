import { customApplications } from "../../../../../../../shared/constants/policies.constants";
import DropDownSelect from "../../../../../../../shared/components/DropDownSelect";
import TableTitle from "../../../../../../../shared/components/Table/TableTitle";
import { useTranslation } from "react-i18next";

const CustomApplications = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <div className="flex flex-row items-center gap-3">
        <TableTitle className="">{t("policies.custom")}</TableTitle>
        <DropDownSelect options={customApplications} />
      </div>
    </div>
  );
};

export default CustomApplications;
