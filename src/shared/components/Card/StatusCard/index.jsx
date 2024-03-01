import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = Array.from({ length: 12 }, (_, index) => ({
  name: `${index + 10}:00`,
  count: Math.floor(Math.random() * 100) + 1,
}));

const StatusCard = ({ icon, number, title, className }) => {
  const lineChartHeight = 60;
  return (
    <div
      className={`bg-slate-200 dark:bg-navy-700 rounded-md pl-2 pr-1 pb-1 cursor-pointer ${className} justify-center flex flex-col h-full`}
    >
      <h5 className="text-sm text-gray-500 dark:text-navy-100 md:font-medium">
        {title}
      </h5>
      <div
        className="flex items-center gap-2"
        style={{ height: "calc(100% - 2rem)" }}
      >
        <span className="text-info text-2xl md:text-4xl">{icon && icon()}</span>
        <span className="text-xl md:text-3xl text-slate-600 dark:text-navy-100 font-normal">
          {number}
        </span>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={lineChartHeight}>
            <LineChart data={data}>
              <XAxis dataKey="name" hide={true} />
              <YAxis hide={true} domain={["dataMin", "dataMax"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8A2BE2"
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
                filter="url(#shadow)"
              />
              <defs>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="3"
                    dy="3"
                    stdDeviation="3"
                    floodColor="#8A2BE2"
                    floodOpacity="0.5"
                  />
                </filter>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
