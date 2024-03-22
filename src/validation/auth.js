import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Message is required"),
});

export const signUpSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Message is required"),
  session: yup.string().required("Session is required"),
  dob: yup.string().required("Date of Birth is required"),
});