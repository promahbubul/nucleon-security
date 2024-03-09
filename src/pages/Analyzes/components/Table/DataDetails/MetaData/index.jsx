import { useTranslation } from "react-i18next";
import CardTable from "@shared/components/Table/CardTable";
import Title from "@shared/components/Title";

const MetaData = ({ metaData }) => {
  const { t } = useTranslation();
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>{t("analyze.metaData")}</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable
          heading={t("analyze.staticAnalysis")}
          content={metaData.staticAnalysis}
        />
        <CardTable
          heading={t("analyze.creationDate")}
          content={metaData.createdTime}
        />
        <CardTable
          heading={t("analyze.lastUpdate")}
          content={metaData.updateDate}
        />
        <CardTable heading={t("analyze.md5")} content={metaData.md5} />
        <CardTable heading={t("analyze.sha1")} content={metaData.sha1} />
        <CardTable heading={t("analyze.sha256")} content={metaData.sha256} />
      </div>
    </div>
  );
};

export default MetaData;
