import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useBookList from "../../../hooks/useBookList";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";


const BookList = () => {
  const { isListLoading, listError, listData } = useBookList();
  console.log("listdata:", listData);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
      <div>
      <h2 className="text-xl">All Books</h2>
        <p className="text-xs">All book list of this virtual library</p>
      </div>
      <div>
        <Link to="/dashboard/books/create">
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center py-2 px-4 rounded-full">
         <FaPlus color="#fff" className="mr-1"/> Add New
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
                        Quantity
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        {item.edition}
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
                        <div className="w-full flex gap-2 items-center justify-between">
                          <div>
                            <FaRegEye size={25} color="#60a5fa"/>
                          </div>
                          <div>
                            <FaPen size={22} color="#eab308"/>
                          </div>
                          <div>
                            <MdDelete size={25} color="#f43f5e"/>
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
  );
};

export default BookList;
