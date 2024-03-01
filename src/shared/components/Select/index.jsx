import Select from "react-select";
const DropDownSelect = ({ options }) => {
  return (
    <Select
      className=" w-full"
      options={options}
      isMulti
      getOptionLabel={(option) => (
        <div className="flex flex-row gap-2">
          <img src={option.image} alt={option.label} width="20" height="20" />
          <span className="text-navy-800">{option.label}</span>
        </div>
      )}
      getOptionValue={(option) => option.value}
    />
  );
};

export default DropDownSelect;
