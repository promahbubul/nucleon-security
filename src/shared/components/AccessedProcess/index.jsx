import Title from "../Title";

const AccessedProcess = ({ accessedProcesses }) => {
  return (
    <div className="dark:bg-navy-700 px-2 py-1 rounded-md bg-white shadow-md w-2/12">
      <Title>Accessed process (0)</Title>
      {/* CONTENT */}
      <div className="">
        {accessedProcesses.length > 0 ? (
          ""
        ) : (
          <p className="text-base text-center italic text-secondary font-semibold mt-3">
            No process related to the threat
          </p>
        )}
      </div>
    </div>
  );
};

export default AccessedProcess;
