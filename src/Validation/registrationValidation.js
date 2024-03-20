import * as Yup from "yup";

const registrationValidation = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("this field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Pasword must be 8 or more characters"),

  contactNo: Yup.string().required("this field is required"),
  address: Yup.string().required("this field is required"),
  latitude: Yup.string().required("this field is required"),
  longitude: Yup.string().required("this field is required"),
});
export default registrationValidation;
