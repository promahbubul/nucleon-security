const Label = ({ children, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-gray-600 hover:text-gray-700 dark:text-navy-100  text-sm md:text-base font-semibold text-left dark:hover:text-slate-400 cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
