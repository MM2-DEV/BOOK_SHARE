import * as yup from "yup";

export const createContactSchema = yup.object({
  title: yup.string().required("Title is required"),
  email: yup.string().required("Email is required"),
  message: yup.string().required("Message is required"),
});
