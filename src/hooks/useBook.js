import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../store/actions/book/bookActionHandler";

const useBook = () => {
  const params = useParams();
  const bookState = useSelector((store) => store.book);

  const { isCreateSuccess } = useSelector((store) => store.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getBook(params.id));
    }
  }, [isCreateSuccess]);

  return bookState;
};

export default useBook;
