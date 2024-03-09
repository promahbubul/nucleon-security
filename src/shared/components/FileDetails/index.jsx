import { useTranslation } from "react-i18next";

import Title from "../Title";
import CardTable from "../Table/CardTable";

const FileDetails = ({ file }) => {
  const { t } = useTranslation();
  // console.log(file);
  return (
    <div className=" px-2 py-1 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>{t("training.fileDetails")}</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={t("training.pId")} content={file.pId} />
        <CardTable heading={t("training.Path")} content={file.path} />
        <CardTable heading={t("training.command")} content={file.command} />
        <CardTable heading={t("training.Signature")} content={file.signature} />
        <CardTable heading={t("training.device")} content={file.device} />
        <CardTable heading={t("training.size")} content={file.size} />
        <CardTable heading={t("training.md5")} content={file.md5} />
        <CardTable heading={t("training.sha1")} content={file.sha1} />
        <CardTable heading={t("training.sha256")} content={file.sha256} />
      </div>
    </div>
  );
};

export default FileDetails;
