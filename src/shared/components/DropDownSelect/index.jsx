import Select from "react-select";
const DropDownSelect = ({ options, className }) => {
  return (
    <Select
      className={`w-full   ${className}`}
      options={options}
      isMulti
      getOptionLabel={(option) => (
        <div className="flex flex-row gap-2 items-center">
          {option.icon && option?.icon()}
          {option.image && (
            <img src={option.image} alt={option.label} width="20" height="20" />
          )}
          <span className="text-navy-800">{option.label}</span>
        </div>
      )}
      getOptionValue={(option) => option.value}
    />
  );
};

export default DropDownSelect;
