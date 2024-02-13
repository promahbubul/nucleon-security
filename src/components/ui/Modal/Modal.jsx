import React from "react";

const Modal = ({ children, showModal, setShowModal, className }) => {
  console.log(showModal);
  return (
    <>
      {showModal ? (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className="bg-black/80 fixed cursor-pointer top-0 bottom-0 left-0 right-0"
          ></div>
          <div
            className={`h-52 bg-white rounded-md z-10 fixed top-3 left-1/2 -translate-x-1/2   ${className}`}
          >
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
