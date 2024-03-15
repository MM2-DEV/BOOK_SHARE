import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useWriterList from "../../../hooks/useWriterList";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWriter } from "../../../store/actions/writers/writersActionHandlers";
import ConfirmDeleteModal from "../../../components/shared/ConfirmDeleteModal";
import { toast } from "react-toastify";

const WriterList = () => {

  const[isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const [deleteId, setDeleteId] = useState(null)

  const { isListLoading, listError, listData, isDeleteSuccess, isDeleteError } = useWriterList();
  console.log("listdata:", listData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const closeHandler = ()=>{
    setIsDeleteModalOpen(false)
  }

  const openHandler = (id)=>{
    setDeleteId(id)
    setIsDeleteModalOpen(true)
  }

  const deleteHandler = () => {
    dispatch(deleteWriter(deleteId));
  };

  
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Writer deleted successfully.", {
        position: "top-right",
      });
      setIsDeleteModalOpen(false);
    }

    if (isDeleteError) {
      toast.error("Writer was not delete.", {
        position: "top-right",
      });
    }
  }, [isDeleteSuccess, isDeleteError]);

  return (
 <>
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-xl">All Writers</h2>
          <p className="text-xs">All writer list of this virtual library</p>
        </div>
        <div>
          <Link to="/dashboard/writers/create">
            <button
              type="button"
              className=" bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center py-2 px-4 rounded-full "
            >
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
                          <div onClick={() => navigate(`/dashboard/writers/create/${item.id}`)}>
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

export default WriterList;
