import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWriterList } from "../store/actions/writers/writersActionHandlers";

const useWriterList = () => {
  const writerState = useSelector((store) => store.writers);
  const dispatch = useDispatch();

  const { isDeleteSuccess } = writerState;

  useEffect(() => {
    dispatch(getWriterList());
  }, [isDeleteSuccess]);

  return writerState;
};

export default useWriterList;
