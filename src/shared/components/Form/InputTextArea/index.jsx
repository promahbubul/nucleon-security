const InputTextArea = ({ placeholder, label, className, height, width }) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor="name"
        className="text-gray-600 hover:text-gray-700 dark:text-navy-100  text-sm md:text-base font-semibold text-left dark:hover:text-slate-400 cursor-pointer"
      >
        {label}
      </label>
      <textarea
        type="text"
        placeholder={placeholder}
        name="name"
        className={`border dark:bg-navy-700 border-slate-300 dark:border-navy-300 dark:text-navy-100   p-1  rounded-sm outline-none ${height} ${width}`}
      />
    </div>
  );
};

export default InputTextArea;
