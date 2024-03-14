import * as yup from "yup";

export const createGenreSchema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  date: yup.string().required("Date is required"),
});


