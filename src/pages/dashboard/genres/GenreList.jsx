import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useGenreList from "../../../hooks/useGenreList";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";



const GenreList = () => {
  const { isListLoading, listError, listData } = useGenreList();
  console.log("listdata:", listData);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
        <div>
        <h2 className="text-xl">All Genres</h2>
        <p className="text-xs">All genre list of this virtual library</p>
        </div>
        <div>
         <Link to="/dashboard/genres/create">
         <button className="bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center py-2 px-4 rounded-full">
           <FaPlus color="#fff" className="mr-1"/> Add New
          </button>
         </Link>
        </div>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">

        {isListLoading && <h4>Loading...</h4>}
        {!isListLoading && listError && <h4>Error</h4>}
        {!isListLoading && !listError && listData && listData && (
          <div className="w-full mt-[20px]">
            <table className="w-[100%] border border-green-600 border-collapse">
              <thead>
                <th className="border border-green-600 px-[20px] py-[5px]">
                  Book Name
                </th>
                <th className="border border-green-600 px-[20px] py-[5px]">
                  Description
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
                        {item.type}
                      </td>
                      <td className="border border-green-600 px-[20px] py-[5px]">
                        Description
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

export default GenreList;

{
  /* <div className="w-full mt-[20px]">
          <table className="w-[100%] border border-green-600 border-collapse">
            <thead>
              <th className="border border-green-600 px-[20px] py-[5px]">
                Book Name
              </th>
              <th className="border border-green-600 px-[20px] py-[5px]">
                Description
              </th>
              <th className="border border-green-600 px-[20px] py-[5px]">
                Action
              </th>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Book Name
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  Description
                </td>
                <td className="border border-green-600 px-[20px] py-[5px]">
                  <div>
                    <span>
                      <FaRegEye />
                    </span>
                    <span>
                      <FaPen />
                    </span>
                    <span>
                      <MdDelete />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */
}
