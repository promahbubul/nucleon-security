import CustomApplications from "./CustomApplications";
import DefaultApplications from "./DefaultApplications";

const Applications = () => {
  return (
    <div className="w-7/12">
      <h3 className="text-md text-base border-b-gray-200 dark:border-b-navy-500 py-2 border-b font-bold text-center dark:text-navy-100 text-gray-500">
        Applications
      </h3>
      <CustomApplications />
      <DefaultApplications />
    </div>
  );
};

export default Applications;
