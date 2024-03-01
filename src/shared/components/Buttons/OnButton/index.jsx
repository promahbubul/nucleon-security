const OnButton = ({ className }) => {
  return (
    <button
      className={`w-16 h-9 rounded-full ${className} flex items-center justify-end pr-1`}
    >
      <div className="bg-white h-7 w-7 rounded-full  "></div>
    </button>
  );
};

export default OnButton;
