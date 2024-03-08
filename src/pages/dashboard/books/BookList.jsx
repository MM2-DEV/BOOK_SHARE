import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const BookList = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">All Books</h2>
        <p className="text-xs">All book list of this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <h2>Book list table will be shown here</h2>
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
              <tr>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Name in English
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Name in Bangla
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Total Available
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Quantity
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Edition
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Genre
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Writer
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donate or Buy
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donor Name
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donate Date
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Price
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Purchase Date
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
                  Name in English
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Name in Bangla
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Total Available
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Quantity
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Edition
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Genre
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Writer
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donate or Buy
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donor Name
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Donate Date
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Price
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Purchase Date
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
  );
};

export default BookList;
