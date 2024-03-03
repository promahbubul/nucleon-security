import Modal from "../../../../../shared/components/Modal";
import SectionContainer from "../../../../../shared/components/SectionContainer";
import {
  FaObjectGroup,
  FaList,
  FaPlus,
} from "../../../../../assets/Icons/Icons";
import InputText from "../../../../../shared/components/Form/InputText";
import InputTextArea from "../../../../../shared/components/Form/InputTextArea";
import DropDownSelect from "../../../../../shared/components/DropDownSelect";
import { policieOptions } from "../../../../../shared/constants/applications.constants";
import Button from "../../../../../shared/components/Buttons/Button/Button";
import InputFile from "../../../../../shared/components/Form/InputFile";
import { useState } from "react";

const CreateApplication = ({ handleModal, showModal }) => {
  const [file, setFile] = useState(null);
  const createApplication = (e) => {
    e.preventDefault();
    alert("Ami");
    handleModal(false);
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(URL.createObjectURL(file));
    setFile(URL.createObjectURL(file));
  };
  return (
    <Modal showModal={showModal} handleModal={handleModal}>
      <div className="fixed  top-1/4 w-10/12 left-1/2 -translate-x-1/2 ">
        <SectionContainer icon={FaObjectGroup} title={"Create application"}>
          {/* Form */}
          <form
            onSubmit={(e) => createApplication(e)}
            action=""
            className="grid grid-cols-12 gap-4 items-start w-full"
          >
            <InputFile
              file={file}
              className={"col-span-1"}
              handleUploadFile={handleUploadFile}
            />
            <div className="col-span-6 grid grid-cols-12 gap-3">
              <InputText
                className="col-span-6 flex flex-row gap-2 w-full items-center "
                label={"Name"}
                placeholder={"Name"}
              />
              <InputText
                className="col-span-6 flex flex-row gap-2 w-full items-center "
                label={"Priority"}
                placeholder={"Priority"}
              />
              {/* <InputText
                id={"policies"}
                name={"policies"}
                htmlFor={"policies"}
                className="col-span-12 flex flex-row gap-2 w-full items-center "
                label={"Policies"}
                placeholder={"Policies"}
              /> */}
              <div className="col-span-12 flex flex-row items-center gap-2">
                <p className="text-gray-600 hover:text-gray-700 dark:text-navy-100  text-sm md:text-base font-semibold text-left dark:hover:text-slate-400 cursor-pointer">
                  Policies
                </p>
                <DropDownSelect options={policieOptions} className={"  "} />
              </div>
            </div>
            <InputTextArea
              label={"Description"}
              placeholder={"Description"}
              className="col-span-5  flex items-start flex-row gap-2"
              height={"w-80"}
              width={"w-full"}
            ></InputTextArea>
            <div className="border-b flex flex-row justify-between border-b-slate-200 w-full py-2 col-span-12">
              <h4 className="flex flex-row gap-2 items-center text-black font-medium dark:text-navy-100 ">
                <FaList className="" />
                Results
              </h4>
              <Button
                className={
                  "bg-slate-200 hover:bg-slate-300 duration-300 hover:shadow-md p-2 dark:text-navy-100 dark:bg-navy-500"
                }
                icon={FaPlus}
              >
                New rule
              </Button>
            </div>
          </form>
          <div className="col-span-12 mt-3 flex flex-row justify-end gap-2">
            <Button
              className={
                "p-2 bg-slate-200 hover:bg-slate-300 shadow-sm duration-300 dark:bg-navy-500 text-black dark:text-navy-100"
              }
            >
              Create
            </Button>
            <Button
              onClick={() => handleModal(false)}
              className={
                "p-2 bg-slate-200 shadow-sm hover:bg-slate-300 duration-300 dark:bg-navy-500 text-black dark:text-navy-100"
              }
            >
              Close
            </Button>
          </div>
        </SectionContainer>
      </div>
    </Modal>
  );
};

export default CreateApplication;
