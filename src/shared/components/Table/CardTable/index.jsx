const CardTable = ({ heading, content }) => {
  return (
    <div className="grid grid-cols-12  gap-2">
      <h3 className="col-span-4 text-slate-500 dark:text-navy-100 font-medium text-xs  ">
        {heading}
      </h3>
      <p className="col-span-8 overflow-hidden text-xs  text-gray-500 dark:text-navy-100 font-normal  ">
        {content}
      </p>
    </div>
  );
};

export default CardTable;
