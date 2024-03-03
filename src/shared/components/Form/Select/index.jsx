const Select = ({ children, className, name, id }) => {
  return (
    <select
      name={name}
      id={id}
      className={`border  p-1.5 cursor-pointer dark:bg-navy-700 border-slate-300 dark:border-navy-300 dark:text-navy-100 rounded-sm outline-none ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;
