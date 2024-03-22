import { FaQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const CardRow = ({ title, children, tooltipid, tooltipContent }) => {
  return (
    <div className=" flex flex-row items-center gap-2  ">
      <div className="w-5/12">
        <h3 className="text-base text-slate-500 dark:text-navy-100 font-medium text-right">
          {title}
        </h3>
      </div>
      <div className="w-2/12  flex   justify-center  ">
        <a
          data-tooltip-id={tooltipid}
          href=""
          data-tooltip-content={tooltipContent}
        >
          <FaQuestionCircle />
        </a>
        <Tooltip
          style={{
            textAlign: "center",
            maxWidth: "200px",
          }}
          place="right"
          id={tooltipid}
        />
      </div>
      {children}
    </div>
  );
};

export default CardRow;
