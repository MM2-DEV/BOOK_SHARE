import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useDonorList from "../../../hooks/useDonorList";

const DonorList = () => {
  const { isListLoading, listError, listData } = useDonorList();
  console.log("listdata:", listData);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">All Donors</h2>
        <p className="text-xs">All donor list of this virtual library</p>
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
                  Action
                </th>
              </thead>
              <tbody>
                {listData.map((item, index) => {
                  return (
                    <tr>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        User Name
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.dob}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        Phone
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        Email
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <FaRegEye size={25} color="#60a5fa"/>
                          </div>
                          <div>
                            <FaPen size={22} color="#eab308"/>
                          </div>
                          <div>
                            <MdDelete size={25} color="#f43f5e"/>
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

export default DonorList;
