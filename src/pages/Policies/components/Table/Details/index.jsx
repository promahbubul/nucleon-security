import Applications from "./Applications";
import Header from "./Header";
import Settings from "./Settings";

const Details = () => {
  return (
    <div className="p-5 w-full border-t-1 border-t-gray-200 dark:border-t-navy-500  peer-checked:block hidden">
      <Header />
      <div className=" flex border-t border-t-gray-200 dark:border-t-navy-500 mt-4 gap-10 flex-col md:flex-row justify-between">
        <Settings />
        <Applications />
      </div>
    </div>
  );
};

export default Details;
