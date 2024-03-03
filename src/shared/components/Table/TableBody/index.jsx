const TBody = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`grid gap-2 grid-cols-12 gap-3- text-gray-500 dark:text-navy-100 hover:bg-slate-100 dark:hover:bg-navy-700  p-2  cursor-pointer ${className} `}
    >
      {children}
    </div>
  );
};

export default TBody;
