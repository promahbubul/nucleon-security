const TableData = ({ children, className }) => {
  return (
    <p
      className={`text-left dark:hover:bg-navy-700 text-gray-500 dark:hover:text-gray-300 items-center py-1 dark:text-gray-200 cursor-pointer w-auto text-xs md:text-sm ${className}`}
    >
      {children}
    </p>
  );
};

export default TableData;
