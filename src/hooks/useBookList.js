import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookList } from "../store/actions/book/bookActionHandler";

const useBookList = () => {
  const bookState = useSelector((store) => store.book);
  const dispatch = useDispatch();

  const {isDeleteSuccess} = bookState

  useEffect(() => {
    dispatch(getBookList());
  }, [isDeleteSuccess]);

  return bookState;
};

export default useBookList;
