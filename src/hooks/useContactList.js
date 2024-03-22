import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactRequestsList } from "../store/actions/contact/contactActionHandlers";

const useContactList = () => {
  const contactState = useSelector((store) => store.contact);

  const dispatch = useDispatch();

  const { isDeleteSuccess } = contactState;

  useEffect(() => {
    dispatch(getContactRequestsList());
  }, [isDeleteSuccess]);

  return contactState;
};

export default useContactList;
