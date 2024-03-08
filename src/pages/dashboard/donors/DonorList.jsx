import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DonorList = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">All Donors</h2>
        <p className="text-xs">All donor list of this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <h2>Donor list table will be shown here</h2>

        <div className="w-full mt-[20px]">
          <table className="w-full border border-green-600 border-collapse">
            <thead>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  User Name
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Date of Birth
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Phone
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Email
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  <div className="px-4">
                    <span>
                      <FaRegEye />
                    </span>
                    <span>
                      <FaPen />
                    </span>
                    <span>
                      <MdDelete />
                    </span>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  User Name
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Date of Birth
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Phone
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Email
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  <div className="px-4">
                    <span>
                      <FaRegEye />
                    </span>
                    <span>
                      <FaPen />
                    </span>
                    <span>
                      <MdDelete />
                    </span>
                  </div>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DonorList