import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useBookList from "../../../hooks/useBookList";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../../store/actions/book/bookActionHandler";
import ConfirmDeleteModal from "../../../components/shared/ConfirmDeleteModal";
import { toast } from "react-toastify";

const BookList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const { isListLoading, listError, listData, isDeleteSuccess, isDeleteError } =
    useBookList();
  console.log("listdata:", listData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const closeHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const openHandler = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const deleteHandler = () => {
    dispatch(deleteBook(deleteId));
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Book deleted successfully.", {
        position: "top-right",
      });
      setIsDeleteModalOpen(false);
    }

    if (isDeleteError) {
      toast.error("Book was not delete.", {
        position: "top-right",
      });
    }
  }, [isDeleteSuccess, isDeleteError]);

  return (
    <>
      <div className="w-full">
        <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl">All Books</h2>
            <p className="text-xs">All book list of this virtual library</p>
          </div>
          <div>
            <Link to="/dashboard/books/create">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center py-2 px-4 rounded-full"
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
            <div className="w-full mt-[20px] overflow-auto">
              <table className="w-full border border-green-600 border-collapse">
                <thead>
                  <tr>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Name in English
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Name in Bangla
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Total Available
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Quantity
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Edition
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Genre
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Writer
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Donate or Buy
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Donor Name
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Donate Date
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Price
                    </th>
                    <th className="border border-green-600 px-[20px] py-[5px]">
                      Purchase Date
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
                          {item.nameEn}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.nameBn}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.totalAvailable}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.totalCount}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.edition}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.genre.name}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.writer.name}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          Donate or Buy
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.bookDonor.name}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.donorDate}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.price}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          {item.purchaseDate}
                        </td>
                        <td className="border border-green-600 px-[20px] py-[5px]">
                          <div className="w-full flex gap-2 items-center justify-between">
                            <div>
                              <FaRegEye size={25} color="#60a5fa" />
                            </div>
                            <div
                              onClick={() =>
                                navigate(`/dashboard/books/create/${item.id}`)
                              }
                            >
                              <FaPen size={22} color="#eab308" />
                            </div>
                            <div onClick={() => openHandler(item.id)}>
                              <MdDelete size={25} color="#f43f5e" />
                            </div>
                          </div>{" "}
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

export default BookList;
