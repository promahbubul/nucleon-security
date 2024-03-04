import { FaFile } from "../../../../assets/Icons/Icons";

const InputFile = ({ file, handleUploadFile, className }) => {
  return (
    <div
      className={`relative border-2 border-dotted rounded-md cursor-pointer  border-slate-200 ${className} `}
    >
      {file ? (
        <img
          src={file}
          alt=""
          className="absolute inset-y-0 cursor-pointer p-1 mx-auto h-full w-32 inset-x-0"
        />
      ) : (
        <div className="flex flex-row gap-1 items-center  inset-y-0 inset-x-0 col-span-9  justify-center   cursor-pointer absolute  ">
          <FaFile className="text-xl font-extrabold cursor-pointer text-slate-400 dark:text-navy-100" />
          <span className="dark:text-navy-100 cursor-pointer text-sm text-slate-400">
            File
          </span>
        </div>
      )}
      <input
        onChange={(e) => handleUploadFile(e)}
        className="col-span-9 opacity-0 border-dotted  w-full h-full p-2 cursor-pointer z-50 "
        type="file"
        name="file"
        id=""
        multiple
      />
    </div>
  );
};

export default InputFile;
