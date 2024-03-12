import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonorList } from "../store/actions/donors/donorsActionHandlers";

const useDonorList = () => {
  const donorState = useSelector((store) => store.donors);

  const dispatch = useDispatch();

  const { isDeleteSuccess } = donorState;

  useEffect(() => {
    dispatch(getDonorList());
  }, [isDeleteSuccess]);

  return donorState;
};

export default useDonorList;
