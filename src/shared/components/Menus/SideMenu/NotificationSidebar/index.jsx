/* eslint-disable react/prop-types */
import NotificationCard from "./NotificationCard";

const NotificationSidebar = ({ setShowNotification }) => {
  return (
    <div className="">
      <div
        onClick={() => setShowNotification(false)}
        className="bg-transparent cursor-pointer fixed top-0 right-0 left-0 bottom-0 "
      ></div>
      <div className="fixed w-1/2 top-0 right-0 z-10 h-screen bg-black p-2 border-l-2 border-l-info flex flex-col gap-2">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default NotificationSidebar;
