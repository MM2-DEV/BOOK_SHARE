import * as yup from "yup";

export const createBookSchema = yup.object({
  nameEn: yup.string().required("Name in English is required"),
  nameBn: yup.string().required("Name in Bengali is required"),
  totalCount: yup.string().required("Quantity is required"),
  edition: yup.string().required("Edition is required"),
  genre: yup.string().required("Genre Name is required"),
  writer: yup.string().required("Writer Name is required"),
  isDonateOrBuy: yup.string().required("Donate or Buy is required"),
  donor: yup.string().required("Donor Name is required"),
  donateDate: yup.string().required("Donate Date is required"),
  price: yup.string().required("Price is required"),
  purchaseDate: yup.string().required("Purchase Date is required"),
});
