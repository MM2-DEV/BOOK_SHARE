import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useReviewList from "../../../hooks/useReviewList";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../store/actions/reviews/reviewsActionHandlers";

const ReviewList = () => {
  const { isListLoading, listError, listData } = useReviewList();
  console.log("listdata:", listData);

  const dispatch = useDispatch();

  const deleteReviewHandler = (id) => {
    console.log("id:", id)
    dispatch(deleteReview(id));
  };

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-xl">All Reviews</h2>
          <p className="text-xs">All review list of this virtual library</p>
        </div>
        <div>
          <Link to="/dashboard/reviews/create">
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
                  Book Name English
                </th>
                <th className="border border-green-600 px-[20px] py-[5px]">
                  Book Name Bengali
                </th>

                <th className="border border-green-600 px-[20px] py-[5px]">
                  User Name
                </th>
                <th className="border border-green-600 px-[20px] py-[5px]">
                  Review
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
                        {item.book?.nameEn}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.book?.nameBn}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.user?.name}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.reviewContent}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <FaRegEye size={25} color="#60a5fa" />
                          </div>
                          <div>
                            <FaPen size={22} color="#eab308" />
                          </div>
                          <div onClick={() => deleteReviewHandler(item.id)}>
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
  );
};

export default ReviewList;
