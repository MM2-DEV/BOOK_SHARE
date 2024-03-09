import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWriterList } from "../store/actions/writers/writersActionHandlers";

const useWriterList = () => {
  const writerList = useSelector((store) => store.writers);
  const dispatch = useDispatch();
  console.log("writerList:", writerList)

  useEffect(() => {
    dispatch(getWriterList());
  }, []);

  return writerList;
};

export default useWriterList;
