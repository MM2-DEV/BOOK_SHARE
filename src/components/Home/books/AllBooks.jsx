import React, { useState } from "react";
import useAllBook from "../../../hooks/useAllBook";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",
      name: "Book 10",
      src: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Koyekti_Mritu-Jahir_Rayhan-23265-7662.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC1JLXPpNK4ih8jPVg863e7GI74N2-STRyfGzYMrZZ5tbcu7RXmF1BP-iUExyq_04VGY&usqp=CAU",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 2",
      src: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqpyXYVPWRQuJmIvLb1FvZyhrDE61oetirb-2uTcNUw&s",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 4",
      src: "https://i.pinimg.com/736x/d1/89/d7/d189d7f2fd2863c58a21bdf194a89fbb.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 5",
      src: "https://cdn.kobo.com/book-images/6537dbab-dd34-4e0d-9670-c5a54e2ccb4e/353/569/90/False/yes-you-can-50-classic-self-help-books-that-will-guide-you-and-change-your-life-3.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 6",
      src: "https://www.eltbooks.com/cover/9780134306667.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 7",
      src: "https://d25swln94uq8y4.cloudfront.net/media/book_th/Samyabadi.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 8",
      src: "https://bengaliebook.com/wp-content/uploads/2021/07/%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%A7%E0%A6%A8-%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BE-768x1086.jpg",
    },
    {
      writer: "Munna",
      love: "1",
      genre: "Story Book",

      name: "Book 9",
      src: "https://static-01.daraz.com.bd/p/44f6ebd30511965d0ea34e057241b6eb.jpg",
    },
  ]);

  const { isListLoading, listError, listData } = useAllBook();

  return (
    <div className="rounded-md my-[20px] bg-slate-100 p-[20px]">
      <h2 className="text-2xl">All Books</h2>
      <div className="bg-white flex flex-row flex-wrap p-2 rounded-md mt-[20px]">
        {allBooks.map((item, index) => (
          <div
            key={index}
            className="p-2  basis-full sm:basis-1/2 md:basis-1/3  xl:basis-1/4"
          >
            <div className="w-full border rounded-md overflow-hidden">
              <div className="w-full h-[300px] bg-slate-100">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="w-full p-3 mt-1">
                <h2 className="text-xl">Title: {item.name}</h2>
                <h6 className="text-md">Genre: {item.genre}</h6>
                <h6 className="text-md">Writer: {item.writer}</h6>
                <div className="flex mt-5 text-white">
                  <button className="grow mr-2 p-2 rounded-lg border border-teal-500 bg-teal-500">
                    Details
                  </button>
                  <button className="grow ml-2 p-2 rounded-lg border border-red-400 bg-red-400">
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
