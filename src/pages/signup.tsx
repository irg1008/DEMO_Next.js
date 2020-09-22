import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";

import Head from "next/head";

import Field from "components/molecules/Field";
import ThemedButton from "components/atoms/ThemedButton";
import Form from "components/organisms/Form";
import GoogleButton from "components/atoms/GoogleButton";

import axios from "axios";
import argon2 from "argon2";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const initialValues: FormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
    .min(6, "The password must be at least 6 characters long")
    .max(50, "Too Long!")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one number, one lowercase and one uppercase"
    )
    .required("Password Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password Required"),
});

interface FormProps {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => (
  <Form
    onSubmit={props.handleSubmit}
    title="sign up"
    extraContent={<GoogleButton text="sign up with google" />}
  >
    <Field type="text" name="username" label="Username" />
    <Field type="email" name="email" label="Email" />
    <Field type="password" name="password" label="Password" />
    <Field type="password" name="confirmPassword" label="Confirm Password" />
    <ThemedButton disabled={props.isSubmitting} text="Submit" type="submit" />
  </Form>
);

const Signup = () => {
  const handleSubmit = async (
    values: FormValues,
    setSubmitting: (submit: boolean) => void
  ) => {
    const hashed = await argon2.hash(values.password);
    if (argon2.verify(hashed, values.password)) {
      const user = await axios.post("/api/auth/users", {
        username: values.username,
        email: values.email,
        password: hashed,
      });

      console.log(user);

      setSubmitting(false);
    }
  };

  const SigupForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({ ...initialValues }),
    validationSchema: validationSchema,
    handleSubmit: (values, { setSubmitting }) =>
      handleSubmit(values, setSubmitting),
  })(InnerForm);

  return (
    <>
      <Head>
        <title>{"Silk&Rock - Sign Up"}</title>
      </Head>
      <SigupForm />
    </>
  );
};

export default Signup;
