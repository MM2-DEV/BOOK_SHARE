import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import useRequestList from "../../../hooks/useRequestList";

const RequestList = () => {
  const { isListLoading, listError, listData } = useRequestList();
  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-xl">All Requests</h2>
          <p className="text-xs">All request list of this virtual library</p>
        </div>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        {isListLoading && <h4>Loading...</h4>}
        {!isListLoading && listError && <h4>Error</h4>}
        {!isListLoading && !listError && listData && listData && (
          <div className="w-full mt-[20px] overflow-x-auto">
            <table className="w-[100%] border border-green-600 border-collapse">
              <thead>
                <tr>
                  <th className="border border-green-600 px-[20px] py-[5px] text-nowrap">
                    Book Name English
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px] text-nowrap">
                    Book Name Bengali
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px] text-nowrap">
                    User Name
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px] text-nowrap">
                    Date of Birth
                  </th>
                  <th className="border border-green-600 px-[20px] py-[5px] text-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {listData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.book.nameEn}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.book.nameBn}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.user.name}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.user.dob}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        <div className="w-full flex items-center justify-between gap-4">
                          <button>
                            <FaCheck size={25} color="#60a5fa" />
                          </button>
                          <button>
                            <FaXmark size={25} color="#60a5fa" />
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
  );
};

export default RequestList;
