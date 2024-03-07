const SectionContainer = ({
  children,
  icon,
  title,
  className,
  childrenClass,
}) => {
  return (
    <div className={`pb-2 dark:bg-navy-800 bg-white rounded-md ${className}`}>
      <div
        className="bg-slate-200 dark:bg-navy-700 order-t-4  rounded-t-md border-info p-3 flex flex-row items-center gap-2 dark:border-b-slate-600 border-b
       text-black"
      >
        <span className="text-md dark:text-navy-100 text-slate-800">
          {icon && icon()}
        </span>
        <h3 className="text-md font-semibold dark:text-navy-100 text-slate-800">
          {title}
        </h3>
      </div>
      <div className={`p-2 ${childrenClass}`}>{children}</div>
    </div>
  );
};

export default SectionContainer;
