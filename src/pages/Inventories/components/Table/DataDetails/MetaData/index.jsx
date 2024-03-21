import { useTranslation } from "react-i18next";
import CardTable from "@shared/components/Table/CardTable";
import Title from "@shared/components/Title";

const MetaData = ({ metaData }) => {
  const { t } = useTranslation();
  console.table(metaData);
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>{t("analyze.metaData")}</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable
          heading={"Static analysis"}
          content={metaData?.staticAnalysis}
        />
        <CardTable heading={"Creation date"} content={metaData?.creationDate} />
        <CardTable heading={"Last update"} content={metaData?.lastUpdate} />
        <CardTable heading={"md5"} content={metaData?.md5} />
        <CardTable heading={"sha1"} content={metaData?.sha1} />
        <CardTable heading={"sha256"} content={metaData?.sha256} />
      </div>
    </div>
  );
};

export default MetaData;
