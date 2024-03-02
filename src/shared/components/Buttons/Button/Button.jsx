const Button = ({ children, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md  ${className} flex flex-row gap-1 items-center`}
    >
      {icon && icon()}
      {children}
    </button>
  );
};

export default Button;
