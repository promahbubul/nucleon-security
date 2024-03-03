const Input = ({ className, placeholder, name, value, type, onChange }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={`border  p-1 dark:bg-navy-700 border-slate-300 dark:border-navy-300 dark:text-navy-100 rounded-sm outline-none ${className}`}
      placeholder={placeholder}
      name={name}
      defaultValue={value}
    />
  );
};

export default Input;
