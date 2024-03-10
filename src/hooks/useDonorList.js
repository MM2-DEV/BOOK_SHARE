import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonorList } from "../store/actions/donors/donorsActionHandlers";

const useDonorList = () => {
  const donorList = useSelector((store) => store.donors);
  const dispatch = useDispatch();
  console.log("donorList:", donorList)

  useEffect(() => {
    dispatch(getDonorList());
  }, []);

  return donorList;
};

export default useDonorList;
