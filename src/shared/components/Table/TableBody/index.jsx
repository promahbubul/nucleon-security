const TableBody = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-12 gap-2  border-b dark:border-b-slate-700 ${className} `}
    >
      {children}
    </div>
  );
};

export default TableBody;
