import { IoWarning } from "react-icons/io5";
import OnButton from "@shared/components/Buttons/OnButton";
import { useState } from "react";
import OffButton from "@shared/components/Buttons/OffButton";
import { FaShieldAlt } from "react-icons/fa";

const Header = () => {
  const [buttonSwitch, setbuttonSwitch] = useState(true);
  return (
    <div className="flex flex-row">
      {/* LEFT */}
      <div className="text-center justify-center w-full cursor-pointer  mx-auto">
        <div className="text-warning justify-center  font-semibold  flex flex-row gap-2 items-center">
          <IoWarning className="text text-3xl" />
          <p className="text-lg">Alert only</p>
        </div>
        <p className="text-sm md:text-base font-medium mt-3">
          Notify administrators when a threat or a malware is detected
        </p>
      </div>
      {/* RIGHT */}
      <div className="w-full   flex items-center justify-center">
        <div onClick={() => setbuttonSwitch(!buttonSwitch)} className="">
          {buttonSwitch ? <OnButton className={"bg-warning"} /> : <OffButton />}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full ">
        <div className="text text-3x gap-2 flex flex-row items-center justify-center font-semibold text-slate-400">
          <FaShieldAlt />
          <h3 className="text-lg"> Protect</h3>
        </div>
        <p className="text-sm md:text-base font-medium text-center text-slate-400 mt-3">
          Notify administrators when a threat or a malware is detected
        </p>
      </div>
    </div>
  );
};

export default Header;
