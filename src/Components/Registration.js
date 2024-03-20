// import { useNavigate } from "react-router";
import { useFormik } from "formik";
import registrationValidation from "../Validation/registrationValidation";
import { POST_REGISTRATION_REQUEST } from "../api/Services/Auth/auth.services";
const Registration = () => {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contactNo: "",
      address: "",
      latitude: "",
      longitude: "",
    },
    validationSchema: registrationValidation,
    onSubmit: (values) => {
      const {
        firstName,
        lastName,
        email,
        password,
        contactNo,
        address,
        latitude,
        longitude,
      } = values;

      const registrationData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        contactNo: contactNo,
        address: address,
        latitude: latitude,
        longitude: longitude,
      };

      POST_REGISTRATION_REQUEST(registrationData)
        .then((res) => {
          // navigate("/");
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 401) {
              console.log("handle user unauthenticated", err.response.data);
            } else if (err.response.status === 403) {
              console.log("handle user forbidden", err.response.data);
            } else if (err.response.status === 422) {
              console.log("handle server validation", err.response.data);
            } else {
              console.log("handle error", err.response.data);
            }
          }
        });
    },
  });

  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Registration</h1>
      </div>
      <div className="container mt-5">
        <form className="row g-3" id="tmp" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputfirstname"
              aria-describedby="firstnameHelp"
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
              name="firstName"
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <span>{formik.errors.firstName}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputlastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="lastnameHelp"
              name="lastName"
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <span>{formik.errors.lastName}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputemail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="emailHelp"
              name="email"
            />
            {formik.errors.email && formik.touched.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputpassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="passwordHelp"
              name="password"
            />
            {formik.errors.password && formik.touched.password && (
              <span>{formik.errors.password}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="contactno" className="form-label">
              Contact No:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputcontactno"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="contactnoHelp"
              name="contactNo"
            />
            {formik.errors.contactNo && formik.touched.contactNo && (
              <span>{formik.errors.contactNo}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputaddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="addressHelp"
              name="address"
            />
            {formik.errors.address && formik.touched.address && (
              <span>{formik.errors.address}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="latitude" className="form-label">
              Latitude:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLatitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="LatitudeHelp"
              name="latitude"
            />
            {formik.errors.latitude && formik.touched.latitude && (
              <span>{formik.errors.latitude}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="longitude" className="form-label">
              Longitude:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputlongitude"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby="longitudeHelp"
              name="longitude"
            />
            {formik.errors.longitude && formik.touched.longitude && (
              <span>{formik.errors.longitude}</span>
            )}
          </div>
          {/* <Autocomplete
            apiKey={"AIzaSyB-Ius5LAQQdnod0Zx8gk3f-jZ8YfZEVQs"}
            style={{ width: "90%" }}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "ru" },
            }}
            defaultValue="Amsterdam"
          /> */}

          <div className="col-12">
            <button className="btn btn-primary m-1" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registration;
