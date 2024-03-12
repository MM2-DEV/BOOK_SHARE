import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../store/actions/book/bookActionHandler";

const useBook = () => {
  const params = useParams();
  const bookState = useSelector((store) => store.book);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getBook(params.id));
    }
  }, []);
  return bookState;
};

export default useBook;
