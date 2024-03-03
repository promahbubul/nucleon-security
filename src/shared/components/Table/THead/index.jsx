const THead = ({ children, className }) => {
  return (
    <div
      className={` grid grid-cols-12  text-gray-500 dark:text-navy-100  text-base font-bold text-left border-b-2 pb-2 border-b-gray-200 dark:border-b-gray-600  mt-3  w-auto md:w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default THead;
