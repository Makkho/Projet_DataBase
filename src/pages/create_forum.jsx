import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { cityValidator, countryValidator, postalcodeValidator, addressValidator, typeValidator, nomValidator } from "@/validators"
import { Header } from "@/components/Header"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  city: "",
  country: "",
  postalcode: "",
  address: "",
  type: "",
  nom:"",
}
const validationSchema = yup.object({
  city: cityValidator,
  country: countryValidator,
  postalcode: postalcodeValidator,
  address: addressValidator,
  type: typeValidator,
  nom: nomValidator
  
})
const CreateForumPage = () => {
  const handleSubmit = async ({city, country, postalcode, address, type, nom  }, { resetForm }) => {
    await axios.post("http://localhost:3000/api/Forum", {
      city,
      country,
      postalcode,
      address,
      type,
      nom
    })

    resetForm()
  }

  return (
      
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
  
      <Form>
        <Header />
        <FormField
          name="city"
          placeholder="Enter a city"
          label="City"
        />
        <FormField
          name="country"
          placeholder="Enter a country"
          label="Country"
        />
        <FormField
          name="postalcode"
          placeholder="Enter a postalcode"
          label="Postalcode"
        />
        <FormField
          name="address"
          placeholder="Enter a address"
          label="Address"
        />
        <FormField
          name="type"
          placeholder="Enter a type"
          label="Type"
        />
        <FormField
          name="nom"
          placeholder="Enter a nom"
          label="Nom"
        />
        <Button type="submit">Create</Button>
      </Form>
    </Formik>
  )
}

export default CreateForumPage