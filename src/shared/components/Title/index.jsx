const Title = ({ children }) => {
  return (
    <h3 className="dark:text-navy-100 font-nucleon-secondary text-gray-500 p-1 text-base font-medium  border-b-gray-200 border-b dark:border-gray-600 ">
      {children}
    </h3>
  );
};

export default Title;
