import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useDonorList from "../../../hooks/useDonorList";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDonor } from "../../../store/actions/donors/donorsActionHandlers";
import ConfirmDeleteModal from "../../../components/shared/ConfirmDeleteModal";
import { toast } from "react-toastify";

const DonorList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const { isListLoading, listError, listData, isDeleteSuccess, isDeleteError } =
    useDonorList();

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
    dispatch(deleteDonor(deleteId));
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Donor deleted successfully.", {
        position: "top-right",
      });
      setIsDeleteModalOpen(false);
    }

    if (isDeleteError) {
      toast.error("Donor was not delete.", {
        position: "top-right",
      });
    }
  }, [isDeleteSuccess, isDeleteError]);

  return (
    <>
      <div className="w-full">
        <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl">All Donors</h2>
            <p className="text-xs">All donor list of this virtual library</p>
          </div>
          <div>
            <Link to="/dashboard/donors/create">
              <button className=" text-white flex items-center justify-center py-2 px-4 rounded-full  border border-teal-500 bg-teal-500 hover:bg-teal-400 hover:border-teal-400">
                <FaPlus color="#fff" className="mr-1" /> Add New
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-5 bg-slate-100 p-3 rounded-lg">
          {isListLoading && <h4>Loading...</h4>}
          {!isListLoading && listError && <h4>Error</h4>}
          {!isListLoading && !listError && listData && listData && (
            <div className="w-full mt-[20px]">
              <table className="w-full border border-green-600 border-collapse">
                <thead>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    User Name
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    Date of Birth
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    Phone
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    Email
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    Total Book
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px]">
                    Action
                  </th>
                </thead>
                <tbody>
                  {listData.map((item, index) => {
                    return (
                      <tr>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.name}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.dob}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.phone}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.gmail}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.book.length}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          <div className="w-full flex items-center justify-between">
                            <div>
                              <FaRegEye size={25} color="#60a5fa" />
                            </div>
                            <div
                              onClick={() =>
                                navigate(`/dashboard/donors/create/${item.id}`)
                              }
                            >
                              <FaPen size={22} color="#eab308" />
                            </div>
                            <div onClick={() => openHandler(item.id)}>
                              <MdDelete size={25} color="#f43f5e" />
                            </div>
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

export default DonorList;
