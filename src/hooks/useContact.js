import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactRequest } from "../store/actions/contact/contactActionHandlers";

const useContact = () => {
  const params = useParams();

  const contactState = useSelector((store) => store.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getContactRequest(params.id));
    }
  }, []);

  return contactState;
};

export default useContact;
