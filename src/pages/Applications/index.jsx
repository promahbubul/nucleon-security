import TopButtonSection from "./components/TopButtonSection";
import ApplicationsSection from "./components/ApplicationsSection";
import ObjectsSection from "./components/ObjectSection";
import { useEffect, useState } from "react";

const Applications = () => {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    fetch("/applications.json")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div>
      {/* TOP BUTTON SECTION */}
      <TopButtonSection />
      <div className="flex  flex-col md:flex-row gap-2 mt-3">
        <ApplicationsSection applications={applications?.applications} />
        <ObjectsSection others={applications?.others} />
      </div>
    </div>
  );
};

export default Applications;
