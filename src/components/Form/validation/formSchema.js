import * as Yup from "yup"
export const formSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  fullName: Yup.string().required("Required").min(3, "Too Short!"),
  location: Yup.string().required("Required"),
  github: Yup.string().required("Required"),
  twitter: Yup.string().required("Required"),
  question1: Yup.string().required("Required"),
  question2: Yup.string().required("Required"),
  question4: Yup.string().required("Required"),
})
