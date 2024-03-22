import SectionContainer from "@shared/components/SectionContainer";
import { FaUser, FaAddressCard, FaEnvelopeOpenText } from "@assets/Icons/Icons";
import Modal from "@shared/components/Modal";
import Label from "@shared/components/Form/Label";
import Input from "@shared/components/Form/Input";
import DropDownSelect from "@shared/components/DropDownSelect";
import { entitiesOptions } from "@shared/constants/updateaccounts.constants";

import Button from "@shared/components/Buttons/Button/Button";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../../../shared/components/LanguageSelector";
import { useState } from "react";
import OnButton from "../../../../shared/components/Buttons/OnButton";
import OffButton from "../../../../shared/components/Buttons/OffButton";

const UpdateAccount = ({ showModal, handleModal }) => {
  const [oneTimePassword, setOneTimePassword] = useState(false);
  const { t } = useTranslation();
  return (
    <Modal showModal={showModal} handleModal={handleModal}>
      <div className="fixed w-11/12 md:w-8/12 left-1/2 -translate-x-1/2 top-5  ">
        <SectionContainer icon={FaUser} title={t("accounts.notification")}>
          {/* TOP MENU */}
          <div className="flex flex-row items-center">
            <button className="flex flex-row gap-3 items-center w-full border-t-1 border-x-1 rounded-t-xl p-3">
              <FaAddressCard className="text-xl" />
              <span className="text-base text-navy-500 font-medium">
                Profile
              </span>
            </button>
            <button className="flex flex-row gap-3 items-center w-full bg-navy-500 p-3  rounded-t-xl text-white">
              <FaEnvelopeOpenText className="text-xl" />
              <span className="text-base text-white font-medium">
                Notifications
              </span>
            </button>
          </div>
          {/* PROFILE */}
          <div className="">
            <div className="grid grid-cols-12 gap-3  h-[calc(100vh-230.1px)] overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-5 scrollbar-thumb-info scrollbar-track-slate-200 scrollbar-thin pb-5 px-5">
              <Label className={"col-span-12 md:col-span-4 "}>
                {t("accounts.notification")}
              </Label>
              <Input
                type={"text"}
                placeholder={"dev@temp.com"}
                className={"col-span-12 md:col-span-8  p-1 rounded-sm "}
              />
              <Label className={"col-span-12 md:col-span-4 "}>
                {t("accounts.firstName")}
              </Label>
              <Input
                type={"text"}
                placeholder={"Fristname"}
                className={"col-span-12 md:col-span-8 p-1 rounded-sm"}
              />
              <Label className={"col-span-12 md:col-span-4 "}>
                {t("accounts.lastName")}
              </Label>
              <Input
                type={"text"}
                placeholder={"Lastname"}
                className={"col-span-12 md:col-span-8 "}
              />
              {/* AUTHORIZATIONS */}
              <div className="col-span-12 flex flex-row border-b-1 border-b-slate-200 pb-3 items-center gap-3 mt-3">
                <div className="h-0.5 w-8 bg-slate-300"></div>
                <p className=" text-navy-500 dark:text-navy-100">
                  {t("accounts.authorizations")}
                </p>
              </div>
              <Label className={"col-span-12 md:col-span-4 "}>
                {t("accounts.entities")}
              </Label>
              <DropDownSelect
                className={"col-span-12 md:col-span-8"}
                options={entitiesOptions}
              />
              {/* CONFIGURATION */}
              <div className="col-span-12 flex flex-row border-b-1 border-b-slate-200 pb-3 items-center gap-3 mt-5">
                <div className="h-0.5 w-8 bg-slate-300"></div>
                <p className=" text-navy-500 dark:text-navy-100">
                  Configuration
                </p>
              </div>
              <Label className={"col-span-12 md:col-span-4 "}>
                Change Language
              </Label>
              <div className="col-span-12 md:col-span-4">
                <LanguageSelector />
              </div>
              {/* AUTHENTICATION */}
              <div className="col-span-12 flex flex-row border-b-1 border-b-slate-200 pb-3 items-center gap-3 mt-3">
                <div className="h-0.5 w-8 bg-slate-300"></div>
                <p className=" text-navy-500 dark:text-navy-100">
                  {t("accounts.authentication")}
                </p>
              </div>
              <Label className={"col-span-12 md:col-span-4 "}>
                {" "}
                {t("accounts.password")}
              </Label>
              <Input
                type={"password"}
                className={"col-span-12 md:col-span-8 "}
              />
              <Label className={"col-span-12 md:col-span-4 "}>
                {t("accounts.confirmPassword")}
              </Label>
              <Input
                type={"password"}
                className={"col-span-12 md:col-span-8 "}
              />
              <Label className={"col-span-4 "}>
                {t("accounts.oneTimePassword")}
              </Label>
              <div className="col-span-8 flex  justify-end ">
                {oneTimePassword ? (
                  <OnButton
                    className={"bg-info"}
                    handleButton={() => setOneTimePassword(false)}
                  />
                ) : (
                  <OffButton handleButton={() => setOneTimePassword(true)} />
                )}
              </div>
            </div>
            <div className="pt-3 pr-3 flex flex-row justify-between border-t border-slate-300">
              <button className="py-2 px-3 rounded-md text-danger border-danger border">
                {t("accounts.delete")}
              </button>
              <div className="flex flex-row gap-2">
                <Button
                  className={
                    "bg-navy-300 px-3 text-navy-800 dark:text-navy-100 dark:bg-navy-500"
                  }
                >
                  {t("accounts.update")}
                </Button>
                <Button
                  onClick={() => handleModal(false)}
                  className={
                    "bg-navy-300 px-3 text-navy-800 dark:text-navy-100 dark:bg-navy-500"
                  }
                >
                  {t("accounts.close")}
                </Button>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </Modal>
  );
};

export default UpdateAccount;
