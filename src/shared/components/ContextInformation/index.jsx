import { useTranslation } from "react-i18next";
import CardTable from "../Table/CardTable";
import Title from "../Title";

const ContextInformation = ({ context }) => {
  const { t } = useTranslation();
  //   console.log(context);
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>{t("training.contextInformation")}</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={t("training.hostName")} content={context.host} />
        <CardTable
          heading={t("training.User")} // {t("training.contextInformation")}
          content={context.user}
        />
        <CardTable heading={t("training.hostIp")} content={context.hostIp} />
        <CardTable heading={t("training.time")} content={context.time} />
        <CardTable heading={t("training.count")} content={context.count} />
        <CardTable heading={t("training.nofified")} content={context.type} />
        <CardTable heading={t("training.action")} content={context.action} />
        <CardTable
          heading={t("training.nofified")}
          content={context.notified}
        />
      </div>
    </div>
  );
};

export default ContextInformation;
