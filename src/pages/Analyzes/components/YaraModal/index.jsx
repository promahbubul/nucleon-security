import { useState } from "react";
import InputFile from "../../../../shared/components/Form/InputFile";
import Modal from "../../../../shared/components/Modal";
import SectionContainer from "../../../../shared/components/SectionContainer";
import Button from "../../../../shared/components/Buttons/Button/Button";

const YaraModal = ({ showModal, handleModal }) => {
  const [file, setFile] = useState(null);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(URL.createObjectURL(file));
    setFile(URL.createObjectURL(file));
  };
  return (
    <Modal showModal={showModal} handleModal={handleModal}>
      <div className="fixed top-5 left-1/2 w-6/12 -translate-x-1/2">
        <SectionContainer title={" Yara rules"} className={"w-full bg-red-500"}>
          <p className="text-sm text-navy-800 font-normal mb-5 dark:text-navy-100">
            Upload the yara rules to apply on analyzed files.
          </p>
          <InputFile
            file={file}
            className={" col-span-12 md:col-span-1"}
            handleUploadFile={handleUploadFile}
          />
          <p className="mt-5 border-t text-sm text-navy-800 font-normal mb-5 dark:text-navy-100 border-t-slate-200 pt-5 dark:border-t-navy-300">
            No YARA rules loaded.
          </p>
          <div className=" flex justify-end border-t mt-8 border-t-slate-200 pt-3 dark:border-t-navy-100">
            <Button
              onClick={() => handleModal(false)}
              className={"bg-slate-200 py-2 px-5"}
            >
              Close
            </Button>
          </div>
        </SectionContainer>
      </div>
    </Modal>
  );
};

export default YaraModal;
