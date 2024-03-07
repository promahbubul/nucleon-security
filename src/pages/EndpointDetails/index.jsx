import { details } from "../../shared/constants/endPoint.constants";
import Details from "./components/Details";
import RemoteAction from "./components/RemoteAction/RemoteAction";



const EndpointDetails = () => {
  return (
    <div>
      {/* section */}
      <div className="grid grid-cols-12 gap-3">
        <Details details={details?.details} />
        <RemoteAction remote_action={details?.remote_action} />
      </div>
      {/* table */}
    </div>
  );
};

export default EndpointDetails;
