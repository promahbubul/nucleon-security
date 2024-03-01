const TableTitle = ({ children, className }) => {
  return (
    <h3
      className={`col-span-4 text-slate-500 dark:text-navy-100 font-medium  ${
        className ? className : "text-sm"
      } `}
    >
      {children}
    </h3>
  );
};

export default TableTitle;
