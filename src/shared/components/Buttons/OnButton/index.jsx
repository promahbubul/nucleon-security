const OnButton = ({ className, handleButton }) => {
  return (
    <button
      onClick={handleButton}
      className={`w-14 h-7 shadow-inner rounded-full ${className} flex items-center justify-end pr-1`}
    >
      <div className="bg-white h-5 w-5 rounded-full  "></div>
    </button>
  );
};

export default OnButton;
