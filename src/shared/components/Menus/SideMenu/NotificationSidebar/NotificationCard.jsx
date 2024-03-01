/* eslint-disable no-unused-vars */
const NotificationCard = ({ tag }) => {
  return (
    <div className="bg-dark-gray border-transparent border hover:border hover:border-info rounded-md cursor-pointer p-2 flex flex-row gap-3">
      <img src="/images/notification.png" alt="" className="w-4/12" />
      <div className="w-8/12 flex flex-col justify-between">
        <h3 className="text-secondary  text-base font-medium">
          Nucleon Smart Endpoint 4.7.0
        </h3>
        {/* <div className=""></div> */}
        <p className="text-secondary text-right"> 03/10/2023</p>
      </div>
    </div>
  );
};

export default NotificationCard;
