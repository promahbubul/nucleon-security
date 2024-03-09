const InputText = ({ placeholder, label, className, name, htmlFor, id }) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor={htmlFor}
        className="text-gray-600  hover:text-gray-700 dark:text-navy-100  text-sm md:text-base font-semibold text-left dark:hover:text-slate-400 cursor-pointer"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        name={name}
        className="border w-full p-1 dark:bg-navy-700 border-slate-300 dark:border-navy-300 dark:text-navy-100 rounded-sm outline-none"
      />
    </div>
  );
};

export default InputText;
