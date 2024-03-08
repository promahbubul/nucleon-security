import { useTranslation } from "react-i18next";
import Title from "../Title";

const RelatedFiles = ({ relatedFiles }) => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-navy-700 p-2  rounded-md bg-white  shadow-md w-3/12">
      <Title>{t("training.noRelated")} (0) </Title>
      {/* CONTENT */}
      <div className="">
        {relatedFiles.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-gray-500 dark:text-navy-100 font-semibold mt-3">
            {t("training.noRelated")}
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedFiles;
