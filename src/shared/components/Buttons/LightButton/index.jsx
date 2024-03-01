import { FiSun } from "../../../../assets/Icons/Icons";
const LightButton = () => {
  return (
    <button className="bg-slate-200 shadow-md w-14 h-7 rounded-full flex justify-start items-center p-1">
      <button className="text-sm bg-white p-1 text-info rounded-full  shadow-md ">
        <FiSun />
      </button>
    </button>
  );
};

export default LightButton;
