import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestList } from "../store/actions/requests/requestsActionHandlers";

const useRequestList = () => {

  const requestState = useSelector((store) => store.requests);

  const dispatch = useDispatch();

  const {isDeleteSuccess} = requestState

  useEffect(() => {

    dispatch(getRequestList());

  }, [isDeleteSuccess]);

  return requestState;
};

export default useRequestList;

