import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookList } from "../store/actions/allBooks/allBooksActionHandlers";

const useAllBook = () => {
  const allBookstate = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  console.log("allBookstate:", allBookstate);

  useEffect(() => {
    dispatch(getAllBookList());
  }, []);
  
  return allBookstate;
};

export default useAllBook;
