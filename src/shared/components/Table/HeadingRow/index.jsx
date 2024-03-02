const HeadingRow = ({ children, className }) => {
  return (
    <div
      className={`w-max md:w-full py-1 border-b-2 border-b-gray-200 dark:border-b-slate-700 grid grid-cols-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default HeadingRow;
