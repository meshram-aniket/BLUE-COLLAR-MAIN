import * as Yup from "yup";

const passwordRules = /~`!@#$%^&*()_-+={[}]|\:;"'<,>.?[a-z][A-Z]/;

export const regSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastname: Yup.string().min(2).max(25).required("Please enter your last name"),
  username: Yup.string().min(2).max(25).required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Please enter your password"),
  //   confirm_password: Yup.string()
  //     .required()
  //     .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signUpSchema = Yup.object({
  username: Yup.string("username does not matched").required("Required"),
  password: Yup.string("password does not matched").required("Required"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});
