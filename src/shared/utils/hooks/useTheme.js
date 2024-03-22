const useTheme = () => {
  const theme = localStorage.getItem("theme");
  console.log(theme);
  if (theme === "dark") {
    return true;
  } else {
    return false;
  }
};

export default useTheme;
