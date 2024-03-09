import Modal from "@shared/components/Modal";
import SectionContainer from "@shared/components/SectionContainer";
import { FaFile, FaObjectUngroup } from "@assets/Icons/Icons";
import Label from "@shared/components/Form/Label";
import Input from "@shared/components/Form/Input";
import Select from "@shared/components/Form/Select";
import DropDownSelect from "@shared/components/DropDownSelect";
import {
  SignedOptions,
  deviceOptions,
  pathOptions,
  signatureOptions,
} from "@shared/constants/applications.constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const UpdateObject = ({ handleModal, showModal, selectObject }) => {
  const [file, setFile] = useState(null);
  const { t } = useTranslation();
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(e);
    const file = e.target.file;
    console.log(file.value);
  };
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(URL.createObjectURL(file));
    setFile(URL.createObjectURL(file));
  };

  const handleDeleteObject = () => {
    handleModal(false);
  };

  console.log(showModal);
  return (
    <Modal handleModal={handleModal} showModal={showModal}>
      <div className="fixed  top-5 w-10/12 h-full left-1/2 -translate-x-1/2 ">
        <SectionContainer
          icon={FaObjectUngroup}
          className={""}
          title={t("applications.updateApplication")}
        >
          {/* <div className="flex flex-row gap-2 items-center">
            <InputText
              className={"w-full flex flex-row gap-2 items-center"}
              label={"Name"}
              placeholder={"7zip Folder"}
            />
          </div> */}
          <form
            onSubmit={(e) => handleUpdate(e)}
            action=""
            className="flex flex-col gap-2 max-h-[calc(100vh-120px)] overflow-hidden overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-rounded-full  scrollbar-thumb-info scrollbar-track-slate-200 p-5"
          >
            <div className="grid grid-cols-12  items-center ">
              <Label className={"col-span-3"}>{t("applications.name")}</Label>
              <Input
                onChange={(e) => e.target.value}
                className={"col-span-9"}
                placeholder={"Name"}
                type={"text"}
                value={selectObject.name}
              />
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>
                {t("applications.description")}
              </Label>
              <Input
                className={"col-span-9"}
                placeholder={"Description"}
                type={"text"}
              />
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>{t("applications.type")}</Label>
              <Select className={"col-span-9"}>
                <option>System</option>
                <option>Network</option>
              </Select>
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>{t("applications.device")}</Label>
              <DropDownSelect
                className={" col-span-9"}
                options={deviceOptions}
              />
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>{t("applications.path")}</Label>
              <DropDownSelect className={" col-span-9"} options={pathOptions} />
            </div>
            {/* file upload */}
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>{t("applications.hash")}</Label>

              <div className="relative col-span-9 border-2 border-dotted rounded-md   border-slate-200 ">
                {file ? (
                  <img
                    src={file}
                    alt=""
                    className="absolute inset-y-0 p-1 mx-auto h-full w-36 inset-x-0"
                  />
                ) : (
                  <div className="flex flex-row gap-3 items-center  inset-y-0 inset-x-0 col-span-9  justify-center   cursor-pointer absolute  ">
                    <FaFile className="text-2xl font-extrabold text-slate-400 dark:text-navy-100" />
                    <span className="dark:text-navy-100  text-slate-400">
                      {t("applications.file")}
                    </span>
                  </div>
                )}
                <input
                  onChange={(e) => handleUploadFile(e)}
                  className="col-span-9 opacity-0 border-dotted  w-full h-full p-5 cursor-pointer z-50 "
                  type="file"
                  name="file"
                  id=""
                  multiple
                />
              </div>
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>
                {t("applications.commandLine")}
              </Label>
              <DropDownSelect className={" col-span-9"} />
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>{t("applications.signed")}</Label>
              <DropDownSelect
                className={" col-span-9"}
                options={SignedOptions}
              />
            </div>
            <div className="grid grid-cols-12  items-center">
              <Label className={"col-span-3"}>
                {t("applications.signature")}
              </Label>
              <DropDownSelect
                className={" col-span-9 bg-info"}
                options={signatureOptions}
              />
            </div>
            <div className="flex flex-row justify-between items-center border-t border-slate-200 dark:border-navy-500 mt-5 pt-3">
              <button
                onClick={handleDeleteObject}
                className="text-danger border hover:bg-danger hover:text-white border-danger rounded-md p-2 text-sm"
              >
                {t("applications.delete")}
              </button>
              <div className="flex flex-row gap-3">
                <input
                  type="submit"
                  value={t("applications.update")}
                  className="bg-slate-200 dark:bg-navy-500 dark:text-navy-100  text-navy-500 p-2 rounded-md text-sm cursor-pointer"
                />
                <button className="bg-slate-200 dark:bg-navy-500 dark:text-navy-100  text-navy-500 p-2 rounded-md text-sm">
                  {t("applications.clone")}
                </button>
                <button
                  onClick={() => handleModal(false)}
                  className="bg-slate-200 dark:bg-navy-500 dark:text-navy-100  text-navy-500 p-2 rounded-md text-sm"
                >
                  {t("applications.close")}
                </button>
              </div>
            </div>
          </form>
        </SectionContainer>
      </div>
    </Modal>
  );
};

export default UpdateObject;
