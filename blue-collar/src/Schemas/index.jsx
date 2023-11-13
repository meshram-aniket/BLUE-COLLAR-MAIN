import * as Yup from "yup";

export const regSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lastname: Yup.string().min(2).max(25).required("Please enter your last name"),
  username : Yup.string().min(2).max(25).required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const signUpSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});