import * as yup from "yup";

export const createReviewSchema = yup.object({
  book: yup.string().required("Book Name is required"),
  reviewContent: yup.string().required("Review Content is required"),
  date: yup.string().required("Date is required"),
});
