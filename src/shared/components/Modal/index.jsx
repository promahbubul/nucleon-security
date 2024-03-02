const Modal = ({ children, showModal, handleModal }) => {
  return (
    <div className={`${showModal ? "block" : "hidden"}   `}>
      <div
        onClick={() => handleModal(false)}
        className="fixed inset-y-0 inset-x-0 bg-navy-900/70 cursor-pointer"
      ></div>
      {children}
    </div>
  );
};

export default Modal;
