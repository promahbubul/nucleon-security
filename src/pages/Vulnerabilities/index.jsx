import Chart from "./components/Chart";
import OsVulnerability from "./components/OsVulnerability";
import SoftwareVulnerability from "./components/SoftwareVulnerability";

const Vulnerabilities = () => {
  return (
    <div>
      {/* CHART */}
      <Chart />
      {/* SOFTWARE VULNERABILITY */}
      <SoftwareVulnerability />
      {/* OS VULNERABILITY */}
      <OsVulnerability />
    </div>
  );
};

export default Vulnerabilities;
