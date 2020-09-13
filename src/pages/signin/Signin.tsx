import React from "react";
import { InjectedFormikProps, withFormik } from "formik";
import * as Yup from "yup";

import Head from "next/head";

import Field from "components/molecules/Field";
import Button from "components/atoms/Button";
import Form from "components/organisms/Form";

import Layout from "components/templates/Layout";

interface FormValues {
  email: string;
  password: string;
}
const initialValues: FormValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
    .min(6, "The password must be at least 6 characters long")
    .max(50, "Too Long!")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one number, one lowercase and one uppercase"
    )
    .required("Password Required"),
});

interface FormProps {
  email?: string;
  password?: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props
) => (
  <Form onSubmit={props.handleSubmit}>
    <Field type="email" name="email" label="Email" />
    <Field type="password" name="password" label="Password" />
    <Button disabled={props.isSubmitting} text="Submit" type="submit" />
  </Form>
);

const handleSubmit = (
  values: FormValues,
  setSubmitting: (submit: boolean) => void
) => {
  setTimeout(() => {
    alert("login");
    setSubmitting(false);
  }, 1000);
};

const SigninForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ ...initialValues }),
  validationSchema: validationSchema,
  handleSubmit: (values, { setSubmitting }) =>
    handleSubmit(values, setSubmitting),
})(InnerForm);

const Signin: React.FC = () => (
  <Layout>
    <Head>
      <title>Sign In</title>
    </Head>
    <h1>Sign in</h1>
    <SigninForm />
  </Layout>
);

export default Signin;
