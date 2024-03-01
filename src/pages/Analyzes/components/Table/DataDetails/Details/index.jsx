import CardTable from "@shared/components/Table/CardTable";
import Title from "@shared/components/Title";

const Details = ({ details }) => {
  console.log(details);
  return (
    <div className=" p-2 rounded-md bg-white dark:bg-navy-700 shadow-md w-full">
      <Title>Details</Title>
      <div className="mt-2 flex flex-col gap-1">
        {/* HOST */}
        <CardTable heading={"Filenames"} content={details.fileName} />
        <CardTable heading={"Type"} content={details.type} />
        <CardTable heading={"Size"} content={details.size} />
        <CardTable
          heading={"Malicious score"}
          content={details.maliciousScore}
        />
        <CardTable heading={"Flags"} content={details.flags} />
        <CardTable heading={"Verdict"} content={details.verdict} />
      </div>
    </div>
  );
};

export default Details;
