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

export const adressValidator = yup
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


