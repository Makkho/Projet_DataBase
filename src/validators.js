import * as yup from "yup"

export const typeValidator = yup
  .string()
  .min(3)
  .required()
  .label("Type de lieu")

export const nomValidator = yup
  .string()
  .min(3)
  .required()
  .label("Name")

export const addressValidator = yup
  .string()
  .min(3)
  .required()
  .label("Adresse")


export const cityValidator = yup
  .string()
  .min(3)
  .required()
  .label("City")

export const postalcodeValidator = yup
  .number()
  .min(3)
  .required()
  .label("Code Postal")

export const countryValidator = yup
  .string()
  .min(3)
  .required()
  .label("Pays")

export const starcountValidator = yup
  .number(1, 5)
  .required()
  .label("Star")


export const isFreeValidator = yup
  .boolean()
  .oneOf([true])
  .oneOf([false])
  .required("The terms and conditions must be accepted.")

export const kitchenTypeValidator = yup
  .boolean()
  .oneOf(["Asian"])
  .oneOf(["BBQ"])
  .required()

