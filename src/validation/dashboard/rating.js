import * as yup from "yup";

export const createRatingSchema = yup.object({
  book: yup.string().required("Book Name is required"),
  ratingValue: yup.string().required("Rating Value is required"),
  date: yup.string().required("Date is required"),
});
