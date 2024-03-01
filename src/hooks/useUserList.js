import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUserList = () => {
  const userList = useSelector((store) => store.users);

  useEffect(() => {}, {});

  return userList;
};

export default useUserList;
