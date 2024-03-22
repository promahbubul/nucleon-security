const OffButton = ({ handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className="bg-slate-200 shadow-md w-14 h-7 rounded-full flex justify-start items-center p-1 border-2 "
    >
      <div className="text-sm bg-white w-5 h-5 text-info rounded-full  shadow-md  "></div>
    </button>
  );
};

export default OffButton;
