import React from "react";
import { Dialog } from "@headlessui/react";

const ConfirmDeleteModal = ({ isOpen, closeHandler, deleteHandler }) => {
  return (
    <Dialog
      className="relative z-50 "
      open={isOpen}
      onClose={() => closeHandler()}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="bg-white p-[40px] rounded-lg border ">
          <Dialog.Title className="text-center">Confirm</Dialog.Title>
          <Dialog.Description className="text-center">Are you want to delete ?</Dialog.Description>

          <div className="text-center mt-[20px]">
            <button
              className="border rounded-md bg-green-500 px-8 py-2 mr-2 text-white"
              onClick={() => closeHandler()}
            >
              No
            </button>
            <button
              className="border rounded-md bg-red-500 px-8 py-2 ml-2 text-white"
              onClick={() => deleteHandler()}
            >
              Yes
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
