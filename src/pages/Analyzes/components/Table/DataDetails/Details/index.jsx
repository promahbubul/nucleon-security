import CardTable from "@shared/components/Table/CardTable";
import Title from "@shared/components/Title";
import { useTranslation } from "react-i18next";

const Details = ({ details }) => {
  const { t } = useTranslation();
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title> {t("analyze.details")}</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable
          heading={t("analyze.filenames")}
          content={details.fileName}
        />
        <CardTable heading={t("analyze.fileType")} content={details.type} />
        <CardTable heading={t("analyze.size")} content={details.size} />
        <CardTable
          heading={t("analyze.maliciousScore")}
          content={details.maliciousScore}
        />
        <CardTable heading={t("analyze.flags")} content={details.flags} />
        <CardTable heading={t("analyze.verdict")} content={details.verdict} />
      </div>
    </div>
  );
};

export default Details;
