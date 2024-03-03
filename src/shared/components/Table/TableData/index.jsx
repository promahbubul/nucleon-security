const TableData = ({ children, className, handle }) => {
  return (
    <p
      className={`text-left  text-gray-500  items-center py-1 dark:text-gray-200 cursor-pointer w-auto text-xs md:text-sm ${className}`}
    >
      {children}
    </p>
  );
};

export default TableData;
