const TableHeading = ({ children, className }) => {
  return (
    <h3
      className={` text-gray-600 hover:text-gray-600 dark:text-navy-100 text-xs sm:text-sm md:text-base font-bold text-left dark:hover:text-slate-100 cursor-pointer ${className}`}
    >
      {children}
    </h3>
  );
};

export default TableHeading;

//  col-span-2
//   text-gray-500   border-b-2 pb-2 border-b-gray-200   w-auto md:w-full
