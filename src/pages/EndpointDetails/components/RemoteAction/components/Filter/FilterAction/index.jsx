import Modal from "@shared/components/Modal";
import SectionContainer from "@shared/components/SectionContainer";
import {
  FaList,
  FaTrash,
  FaFileDownload,
  FaInfoCircle,
  FaPlus,
} from "@assets/Icons/Icons";
import OffButton from "@shared/components/Buttons/OffButton";
import { Tooltip } from "react-tooltip";
import Button from "@shared/components/Buttons/Button/Button";
import { useState } from "react";
import OnButton from "../../../../../../../shared/components/Buttons/OnButton";

const FilterAction = ({ showModal, handleModal }) => {
  const [toggleNotificationButton, setToggleNotificationButton] =
    useState(false);
  return (
    <Modal showModal={showModal} handleModal={handleModal}>
      <SectionContainer
        icon={FaList}
        title={"Create automated actions"}
        className={"fixed top-5 left-1/2 -translate-x-1/2 w-6/12"}
      >
        <p className="text-base font-normal text-navy-800">
          1 endpoint selected for the following remote actions
        </p>
        <div className="flex flex-row gap-1  mt-5 items-start">
          {/* left status */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-8 w-0.5 bg-info "></div>
            <div className="p-2 border w-max border-info rounded-full">
              <FaFileDownload className="text-sm dark:text-navy-100" />
            </div>
            <div className="h-64 w-0.5 bg-info "></div>
            <div className="p-2 border w-max cursor-pointer border-info hover:shadow-md rounded-full">
              <FaPlus className="text-sm hover:text-info dark:text-navy-100 duration-300 " />
            </div>
          </div>
          {/* right box */}
          <div className="border w-full p-2 flex flex-col gap-2">
            {/* TYPE */}
            <div className="flex flex-row">
              <h4 className="w-4/12 text-base font-bold text-navy-700 dark:text-navy-100">
                Type
              </h4>
              <select className="w-8/12 border outline-none border-slate-300 rounded-sm  p-1">
                <option>Download File</option>
                <option>Kill process </option>
                <option>Kill process memory</option>
                <option>Delete File</option>
              </select>
            </div>
            {/* NOTIFICATION */}
            <div className="flex flex-row pb-5 border-b border-b-slate-300">
              <h4 className="w-4/12 flex flex-row items-center gap-1  dark:text-navy-100   text-base font-bold text-navy-700">
                Notifications
                <span id="notification" className="cursor-pointer">
                  <FaInfoCircle />
                </span>
                <Tooltip
                  anchorSelect="#notification"
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    width: "200px",
                    textAlign: "center",
                  }}
                  place="right"
                  content="Send notification on remote action update"
                />
              </h4>
              <div className="w-8/12">
                {toggleNotificationButton ? (
                  <OnButton
                    className={"bg-info"}
                    handleButton={() => setToggleNotificationButton(false)}
                  />
                ) : (
                  <OffButton
                    handleButton={() => setToggleNotificationButton(true)}
                  />
                )}
              </div>
            </div>
            {/* REBOOT */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-10 h-0.5 bg-slate-300"></div>
              <p className="text-base font-normal text-navy-700 dark:text-navy-100">
                Requested files will be downloaded from the selected endpoint
              </p>
            </div>
            <div className="flex flex-row items-start pb-5 mt-2 border-b border-b-slate-300">
              <h4 className="w-4/12 flex flex-row items-center gap-1     text-base font-bold text-navy-700 dark:text-navy-100">
                Reboot
              </h4>
              <div className="w-8/12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border border-slate-300 w-full h-20 outline-none p-2 rounded-sm"
                  placeholder="C:\Users\Admin\file_1.txt
C:\Users\Admin\file_2.txt"
                ></textarea>
              </div>
            </div>
            <div className=" flex flex-row justify-end">
              <Button
                icon={FaTrash}
                className={"text-danger border  border-danger p-2 w-max "}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Modal>
  );
};

export default FilterAction;
