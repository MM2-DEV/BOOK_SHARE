import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDonor } from "../store/actions/donors/donorsActionHandlers";

const useDonor = () => {
  const params = useParams();
  const donorState = useSelector((store) => store.donors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getDonor(params.id));
    }
  }, []);

  return donorState;
};

export default useDonor;
