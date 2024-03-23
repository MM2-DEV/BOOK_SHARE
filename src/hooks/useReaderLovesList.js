import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReaderLovesList } from "../store/actions/readerLoves/readerLovesActionHandlers";

const useReaderLovesList = () => {

  const readerLovesState = useSelector((store) => store.readerLoves);

  const dispatch = useDispatch();

  const {isDeleteSuccess} = readerLovesState

  useEffect(() => {

    dispatch(getReaderLovesList());

  }, [isDeleteSuccess]);

  return readerLovesState;
};

export default useReaderLovesList;

