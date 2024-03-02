import Modal from "../../../../../shared/components/Modal";
import SectionContainer from "../../../../../shared/components/SectionContainer";
import { FaObjectGroup } from "../../../../../assets/Icons/Icons";
import InputText from "../../../../../shared/components/Form/InputText";
import InputTextArea from "../../../../../shared/components/Form/InputTextArea";

const ApplicationModal = ({ handleModal, showModal }) => {
  return (
    <Modal showModal={showModal} handleModal={handleModal}>
      <div className="fixed  top-1/4 w-10/12 left-1/2 -translate-x-1/2 ">
        <SectionContainer icon={FaObjectGroup} title={"Create application"}>
          {/* Form */}
          <form
            action=""
            className="grid grid-cols-12 gap-4 items-start w-full"
          >
            <input type="file" name="" id="" className="col-span-1" />
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
              <InputText
                id={"policies"}
                name={"policies"}
                htmlFor={"policies"}
                className="col-span-12 flex flex-row gap-2 w-full items-center "
                label={"Policies"}
                placeholder={"Policies"}
              />
            </div>

            <InputTextArea
              label={"Description"}
              placeholder={"Description"}
              className="col-span-5  flex items-start flex-row gap-2"
              height={"w-80"}
              width={"w-full"}
            ></InputTextArea>
          </form>
        </SectionContainer>
      </div>
    </Modal>
  );
};

export default ApplicationModal;
