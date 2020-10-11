import { FormikBag, FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import Field from "components/molecules/Field";
import ThemedButton from "components/atoms/ThemedButton";
import Form from "components/organisms/Form";
import GoogleButton from "components/atoms/GoogleButton";
import validations from "util/validations";
import { signUp } from "middlewares/auth";
import codes from "util/errorCodes";
import useUser from "lib/useUser";
import Router from "routes";
import React from "react";
import ForbiddenAuth from "components/templates/ForbiddenAuth";

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

interface FormProps {}

const validationSchema = Yup.object<FormValues>({
  username: validations.username,
  email: validations.email,
  password: validations.password,
  confirmPassword: validations.confirmPassword,
});

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

const SignUp = () => {
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, setFieldError }: FormikBag<FormProps, FormValues>
  ) => {
    // Sign up the user.
    const res = await signUp(values.username, values.email, values.password);

    if (!res.success) {
      switch (res.code) {
        case codes.signup.emailAlreadyTaken: {
          setFieldError(
            "email",
            "This email is already taken. Please try another or sign in"
          );
          break;
        }
        default: {
          setFieldError(
            "email",
            "Sorry, an unknown error ocurred, try again later"
          );
          console.error(res);
          break;
        }
      }
      setSubmitting(false);
    } else {
      Router.push("/signin");
    }
  };

  const SigUpForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => initialValues,
    validationSchema,
    handleSubmit,
  })(InnerForm);

  return (
    <ForbiddenAuth hideWhen="signed">
      <Head>
        <title>{"Silk&Rock - Sign Up"}</title>
      </Head>
      <SigUpForm />
    </ForbiddenAuth>
  );
};

export default SignUp;
