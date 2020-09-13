import { InjectedFormikProps, withFormik } from "formik";
import * as Yup from "yup";

import Head from "next/head";

import Field from "components/molecules/Field";
import Button from "components/atoms/Button";
import Form from "components/organisms/Form";

import Layout from "components/templates/Layout";

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

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props
) => (
  <Form onSubmit={props.handleSubmit}>
    <Field type="text" name="username" label="Username" />
    <Field type="email" name="email" label="Email" />
    <Field type="password" name="password" label="Password" />
    <Field type="password" name="confirmPassword" label="Confirm Password" />
    <Button disabled={props.isSubmitting} text="Submit" type="submit" />
  </Form>
);

const handleSubmit = (
  values: FormValues,
  setSubmitting: (submit: boolean) => void
) => {
  setTimeout(() => {
    alert("signin");
    setSubmitting(false);
  }, 1000);
};

const SigupForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ ...initialValues }),
  validationSchema: validationSchema,
  handleSubmit: (values, { setSubmitting }) =>
    handleSubmit(values, setSubmitting),
})(InnerForm);

const Signup: React.FC = () => (
  <Layout>
    <Head>
      <title>Sign Up</title>
    </Head>
    <h1>Sign in</h1>
    <SigupForm />
  </Layout>
);

export default Signup;
