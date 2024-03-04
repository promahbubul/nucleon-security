import OsVulnerability from "./components/OsVulnerability";
import SoftwareVulnerability from "./components/SoftwareVulnerability";

const Vulnerabilities = () => {
  return (
    <div>
      {/* CHART */}
      {/* SOFTWARE VULNERABILITY */}
      <SoftwareVulnerability />
      {/* OS VULNERABILITY */}
      <OsVulnerability />
    </div>
  );
};

export default Vulnerabilities;
