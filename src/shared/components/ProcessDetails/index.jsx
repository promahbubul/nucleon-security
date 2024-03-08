import { useTranslation } from "react-i18next";
import CardTable from "../Table/CardTable";
import Title from "../Title";

const ProcessDetails = ({ processes }) => {
  const { t } = useTranslation();
  // console.log(processes);
  return (
    <div className="dark:bg-navy-700 p-2 rounded-md bg-white shadow-md w-full">
      <Title>{t("training.processDetails")} </Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={t("training.pId")} content={processes.pId} />
        <CardTable heading={t("training.PPID")} content={processes.ppId} />
        <CardTable heading={t("training.Path")} content={processes.path} />
        <CardTable
          heading={t("training.Signature")}
          content={processes.signature}
        />
        <CardTable heading={t("training.device")} content={processes.device} />
        <CardTable heading={t("training.size")} content={processes.size} />
        <CardTable heading={t("training.md5")} content={processes.md5} />
        <CardTable heading={t("training.sha1")} content={processes.sha1} />
        <CardTable heading={t("training.sha56")} content={processes.sha56} />
      </div>
    </div>
  );
};

// {t("training.processDetails")}

export default ProcessDetails;
