const TableHeading = () => {
  return (
    <div className=" grid grid-cols-12  text-gray-500 dark:text-navy-100  text-base font-bold text-left border-b-2 pb-2 border-b-gray-200 dark:border-b-gray-600  mt-3  w-auto md:w-full ">
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        Creation date
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        File name
      </h3>
      <h3 className=" col-span-3  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        File Type
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        File Size
      </h3>
      <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        Result
      </h3>
      <h3 className=" col-span-1  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
        Status
      </h3>
    </div>
  );
};

export default TableHeading;
