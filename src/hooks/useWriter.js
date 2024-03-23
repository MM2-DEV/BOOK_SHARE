import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWriter } from "../store/actions/writers/writersActionHandlers";

const useWriter = () => {
  const params = useParams();
  const writerState = useSelector((store) => store.writers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getWriter(params.id));
    }
  }, []);
  return writerState;
};

export default useWriter;
