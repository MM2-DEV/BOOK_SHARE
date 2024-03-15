import * as yup from "yup";

export const createDonorSchema = yup.object({
  name: yup.string().required("Name is required"),
  dob: yup.string().required("Date of Birth is required"),
  phone: yup.string().required("Phone Number is required"),
  gmail: yup.string().required("Email is required"),
});
