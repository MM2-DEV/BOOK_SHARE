import * as yup from "yup";

export const createBookSchema = yup.object({
  nameEn: yup.string().required("Name in English is required"),
  nameBn: yup.string().required("Name in Bengali is required"),
  image: yup.string().required("Valid image url is required"),
  totalCount: yup.string().required("Quantity is required"),
  edition: yup.string().required("Edition is required"),
  genre: yup.string().required("Genre Name is required"),
  writer: yup.string().required("Writer Name is required"),

  isDonateOrBuy: yup.boolean(),

  donor: yup.string().when("isDonateOrBuy", {
    is: true,
    then: (schema) => schema.required("Donor Name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  donateDate: yup.string().when("isDonateOrBuy", {
    is: true,
    then: (schema) => schema.required("Donate Date is required"),
    otherwise: (schema) => schema.notRequired(),
  }),


  price: yup.string().when("isDonateOrBuy", {
    is: false,
    then: (schema) => schema.required("Price is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  purchaseDate: yup.string().when("isDonateOrBuy", {
    is: false,
    then: (schema) => schema.required("Purchase Date is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

});
