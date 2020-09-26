import * as Yup from "yup";

const email = Yup.string().email("Invalid email").required("Email Required");

const password = Yup.string()
  .min(6, "The password must be at least 6 characters long")
  .max(50, "Too Long!")
  .matches(
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
    "Password must contain at least one number, one lowercase and one uppercase"
  )
  .required("Password Required");

const confirmPassword = Yup.string()
  .oneOf([Yup.ref("password")], "Passwords must match")
  .required("Confirm Password Required");

const username = Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required("Required");

export default { email, confirmPassword, username, password };
