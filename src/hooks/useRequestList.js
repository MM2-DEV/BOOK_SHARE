import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestList } from "../store/actions/borrowRequest/requestsActionHandlers";

const useRequestList = () => {
  const requestState = useSelector((store) => store.requests);

  const dispatch = useDispatch();

  const { isDeleteSuccess, isUpdateSuccess } = requestState;

  useEffect(() => {
    dispatch(getRequestList());
  }, [isDeleteSuccess, isUpdateSuccess]);

  return requestState;
};

export default useRequestList;
