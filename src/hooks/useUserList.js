import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../store/actions/users/usersActionHandlers";

const useUserList = () => {
  const userState = useSelector((store) => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return userState;
};

export default useUserList;
