import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English", img: "/images/lg/english.png" },
    { code: "fr", lang: "French", img: "/images/lg/french.png" },
    { code: "hi", lang: "Hindi", img: "/images/lg/german.png" },
    { code: "sp", lang: "Spanish", img: "/images/lg/spanish.png" },
    { code: "ar", lang: "Arabian", img: "/images/lg/arabic.png" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  // console.log();
  return (
    <div className="w-full relative">
      {showLanguages ? (
        <div
          onClick={() => setShowLanguages(false)}
          className=" fixed inset-x-0 inset-y-0"
        ></div>
      ) : (
        ""
      )}

      {languages.map(
        (lng) =>
          lng.code === i18n.language && (
            <button
              key={lng.code}
              onClick={() => setShowLanguages(!showLanguages)}
              className="w-full border  border-gray-300 hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-start text-xl"
            >
              <img src={lng.img} alt="" className="w-7 h-6" />
              <span>|</span>
              <span>{lng.lang}</span>
            </button>
          )
      )}

      {showLanguages ? (
        <div
          onClick={() => setShowLanguages(!showLanguages)}
          className="absolute bg-white dark:bg-navy-600 dark:hover:bg-navy-700 w-full top-11 shadow-2xl rounded-md z-20"
        >
          {languages.map((lng) => (
            <button
              onClick={() => changeLanguage(lng.code)}
              key={lng.code}
              className="w-full  hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-start text-xl"
            >
              <img src={lng.img} alt="" className="w-7 h-6" />
              <span> |</span>
              <span>{lng.lang}</span>
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LanguageSelector;
