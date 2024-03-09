import { TbLoader2 } from "@assets/Icons/Icons";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-20 ">
      <TbLoader2 className="text-4xl font-bold text-info  animate-spin" />
    </div>
  );
};

export default Loading;
