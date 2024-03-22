import * as yup from "yup";

export const createBookSchema = yup.object({
  nameEn: yup.string().required("Name in English is required"),
  nameBn: yup.string().required("Name in Bengali is required"),
  image: yup.string().url().required("Valid image url is required"),
  totalCount: yup.string().required("Quantity is required"),
  edition: yup.string().required("Edition is required"),
  genreId: yup
    .number()
    .required("Genre Name is required")
    .typeError("Genre Name is required"),
  writerId: yup
    .number()
    .required("Writer Name is required")
    .typeError("Writer Name is required"),

  isDonateOrBuy: yup.boolean(),

  donorId: yup.number().when("isDonateOrBuy", {
    is: true,
    then: (schema) =>
      schema
        .required("Donor Name is required")
        .typeError("Donor Name is required"),
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
