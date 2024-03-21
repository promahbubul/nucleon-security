import { useEffect, useState } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

import { FaChevronDown, IoCloseSharp, FaCheck } from "@assets/Icons/Icons";
import DataDetails from "../DataDetails";
const TableData = () => {
  const [analyzes, setAnalyzes] = useState(null);
  useEffect(() => {
    fetch("/alnalyzes.json")
      .then((res) => res.json())
      .then((data) => setAnalyzes(data));
  }, []);

  return (
    <>
      {analyzes ? (
        <>
          {analyzes.map((analyze, index) => (
            <div
              key={index}
              className="last:border-b-0  duration-300  w-auto md:w-full text-base border-b border-b-gray-200 dark:border-b-slate-600 relative"
            >
              <input
                type="checkbox"
                className="absolute top-0 right-0 z-10 opacity-0 inset-x-0  peer h-10  cursor-pointer
                      "
              />
              <FaChevronDown className="absolute dark:text-navy-100 text-gray-500 right-6 top-3 peer-checked:rotate-180" />

              <div className="grid gap-2 grid-cols-12 gap-3- text-gray-500 dark:text-navy-100 hover:bg-slate-100 dark:hover:bg-navy-700  py-2 ">
                <p className="col-span-2 flex flex-col gap-3 ">
                  {analyze.date} <span className="">{analyze.time}</span>
                </p>
                <p className="col-span-2">{analyze.fileName}</p>
                <p className="col-span-3">{analyze.fileType}</p>
                <p className="col-span-2">{analyze.fileSize}</p>
                <p className="col-span-2  flex flex-row items-center gap-2">
                  {analyze.result === "Malicious" ? (
                    <IoCloseSharp className="text-red-500 font-semibold" />
                  ) : (
                    <FaCheck className="text-success" />
                  )}
                  {analyze.result}
                </p>
                <p className="col-span-1 flex flex-row items-center gap-2">
                  <FaCheck className="text" />
                  {analyze.status}
                </p>
              </div>
              <DataDetails analyze={analyze} />
            </div>
          ))}
        </>
      ) : (
        <TbLoaderQuarter className="text-4xl text-info text-center mx-auto animate-spin" />
      )}
    </>
  );
};

export default TableData;
