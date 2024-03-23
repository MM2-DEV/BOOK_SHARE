import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGeneralKnowledgeBook from "../../../hooks/useGeneralKnowledgeBook";

const GeneralKnowledgeBooks = ({ createBorrowHandler }) => {
  const navigate = useNavigate();

  const { isGkBookListLoading, gkBookListError, gkBookListData } =
    useGeneralKnowledgeBook();

  return (
    <div className="rounded-md my-[20px] bg-slate-100 p-[20px]">
      <h2 className="text-2xl">General Knowledge Books</h2>

      {isGkBookListLoading && <h4 className="text-center">Loading...</h4>}
      {!isGkBookListLoading && gkBookListError && (
        <h4 className="text-center text-red-500">Error</h4>
      )}

      {!isGkBookListLoading &&
      !gkBookListError &&
      gkBookListData &&
      gkBookListData.length > 0 ? (
        <>
          <div className="bg-white flex flex-row flex-wrap p-2 rounded-md mt-[20px]">
            {gkBookListData.map((item, index) => (
              <div
                key={index}
                className="p-2  basis-full sm:basis-1/2 md:basis-1/3  xl:basis-1/4"
              >
                <div className="w-full border rounded-md overflow-hidden">
                  <div className="w-full h-[300px] bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.nameEn}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-full p-3 mt-1">
                    <h2 className="text-lg truncate font-bold">Title: {item.nameEn}</h2>
                    <h6 className="text-md">Genre: {item.genre?.name}</h6>
                    <h6 className="text-md">Writer: {item.writer?.name}</h6>
                    <div className="flex mt-5 text-white">
                      <button
                        className="grow mr-2 p-2 rounded-lg border border-teal-500 bg-teal-500"
                        onClick={() => navigate(`/book-details/${item.id}`)}
                      >
                        Details
                      </button>
                      <button
                        onClick={() => createBorrowHandler(item.id)}
                        className="grow ml-2 p-2 rounded-lg border border-red-400 bg-red-400"
                      >
                        Borrow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 
          <div className="bg-white p-2 rounded-md mt-[20px] text-center">
            <button className="grow ml-2 p-2 rounded-lg border border-teal-500 bg-teal-500 text-white">
              Load More
            </button>
          </div> */}
        </>
      ) : (
        <h4 className="text-center text-red-400">No Data Found</h4>
      )}
    </div>
  );
};

export default GeneralKnowledgeBooks;
