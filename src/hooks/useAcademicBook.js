import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcademicBookList } from "../store/actions/allBooks/allBooksActionHandlers";

const useAcademicBook = () => {
  const academicBookState = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAcademicBookList());
  }, []);

  return academicBookState;
};

export default useAcademicBook;
