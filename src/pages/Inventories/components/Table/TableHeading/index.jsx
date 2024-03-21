import { useTranslation } from "react-i18next";
import HeadingRow from "../../../../../shared/components/Table/HeadingRow";
import TableHeading from "../../../../../shared/components/Table/TableHeading";

const TableHeadingSection = () => {
  const { t } = useTranslation();
  return (
    <HeadingRow className={"mt-5"}>
      <TableHeading className={"col-span-1"}>
        {t("inventories.hostname")}
      </TableHeading>
      <TableHeading className={"col-span-2"}>
        {t("inventories.filename")}
      </TableHeading>
      <TableHeading className={"col-span-4"}>
        {t("inventories.filepath")}
      </TableHeading>
      <TableHeading className={"col-span-3"}>
        {t("inventories.fileType")}
      </TableHeading>
      <TableHeading className={"col-span-1"}>
        {t("inventories.fileSize")}
      </TableHeading>
      <TableHeading className={"col-span-1"}>
        {t("inventories.verdict")}
      </TableHeading>
    </HeadingRow>
  );
};

export default TableHeadingSection;
