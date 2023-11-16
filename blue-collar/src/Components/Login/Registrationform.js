import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { regSchema } from "../../Schemas";

export default function Login() {
  // const gradientStyle = {
  //   background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
  //   height: "100vh",
  // };

  //   login password
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   Register alert
  const registerAlert = () => {
    alert("Clicked on the link send on the email for confirmation");
  };

  // validations
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: regSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: Login.js:51 ~ Login ~ value̥s:", values);
        action.resetForm();
        if (
          values.firstname !== "" &&
          values.lastname !== "" &&
          values.username !== "" &&
          values.email !== "" &&
          values.password !== ""
        ) {
          registerAlert();
        }
      },
    });
  console.log("🚀 ~ file: Login.js:50 ~ Login ~ err̥ors:", errors);


  return (
    <>
      {/* Register Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: 500, height: 600 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-center fs-5" id="Register">
                Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* <form> */}
              <form className="px-3" onSubmit={handleSubmit}>
                {/* First Name input */}
                <div className="form-outline">
                  <label className="form-label" htmlFor="registerName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.firstname && touched.firstname
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstname && touched.firstname ? (
                    <p className="form-error text-danger">{errors.firstname}</p>
                  ) : null}
                </div>
                {/* Last Name input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.lastname && touched.lastname
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && touched.lastname ? (
                    <p className="form-error text-danger text-danger">
                      {errors.lastname}
                    </p>
                  ) : null}
                </div>
                {/* Username input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={
                      errors.username && touched.username
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username ? (
                    <p className="form-error text-danger">{errors.username}</p>
                  ) : null}
                </div>
                {/* Email input */}
                <div className="form-outline ">
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    style={
                      errors.email && touched.email
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error text-danger">{errors.email}</p>
                  ) : null}
                </div>
                {/* Password input */}
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    style={
                      errors.password && touched.password
                        ? { border: "solid red 2px" }
                        : { border: "solid #d4d4d4 1px" }
                    }
                    autoComplete="off"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-danger">{errors.password}</p>
                  ) : null}
                </div>
                {/* 2 column grid layout for inline styling */}
                <div className="row mb-3">
                  <div className="col d-flex justify-content-left">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example31"
                        defaultChecked=""
                        onClick={togglePasswordVisibility}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        {showPassword ? "Hide Password" : "Show Password"}
                      </label>
                    </div>
                  </div>
                </div>
                {/* Submit button */}
                <button
                  href="#!"
                  type="submit"
                  className="btn btn-dark btn-block mb-1"
                  style={{ width: "100%" }}
                >
                  Register
                </button>


                <div className="text-center mb-3">
                  <p className="text-center mb-1">or:</p>

                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-facebook-f fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-google fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-3"
                  >
                    <i className="fab fa-github fa-2x" />
                  </button>
                </div>
                {/* </form> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
