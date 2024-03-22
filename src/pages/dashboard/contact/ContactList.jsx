import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useContactList from "../../../hooks/useContactList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteContactRequest } from "../../../store/actions/contact/contactActionHandlers";
import ConfirmDeleteModal from "../../../components/shared/ConfirmDeleteModal";

const ContactList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const { isListLoading, listError, listData, isDeleteSuccess, isDeleteError } =
    useContactList();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const openHandler = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const deleteHandler = () => {
    dispatch(deleteContactRequest(deleteId));
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Contact request deleted successfully.", {
        position: "top-right",
      });
      setIsDeleteModalOpen(false);
    }

    if (isDeleteError) {
      toast.error("Contact request was not delete.", {
        position: "top-right",
      });
    }
  }, [isDeleteSuccess, isDeleteError]);

  return (
    <>
      <div className="w-full">
        <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl">All Contact Requests</h2>
            <p className="text-xs">
              All contact requests list of this virtual library
            </p>
          </div>
        </div>

        <div className="mt-5 bg-slate-100 p-3 rounded-lg">
          {isListLoading && <h4>Loading...</h4>}
          {!isListLoading && listError && <h4>Error</h4>}
          {!isListLoading && !listError && listData && listData && (
            <div className="w-full mt-[20px]">
              <table className="w-full border border-green-600 border-collapse">
                <thead>
                  <tr>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      User Name
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Title
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Email
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Message
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listData.map((item, index) => {
                    return (
                      <tr>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.user?.name}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.title}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.user?.email}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.message}
                        </td>

                        <td className="border border-green-600 px-[20px] py-[5px]">
                          <div className="w-full flex items-center justify-between">
                            <button
                              onClick={() => navigate(`/contact/${item.id}`)}
                            >
                              <FaPen size={22} color="#eab308" />
                            </button>
                            <button onClick={() => openHandler(item.id)}>
                              <MdDelete size={25} color="#f43f5e" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          closeHandler={closeHandler}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
};

export default ContactList;
