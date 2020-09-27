import { FormikBag, FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "middlewares/auth";
import Head from "next/head";
import Field from "components/molecules/Field";
import ThemedButton from "components/atoms/ThemedButton";
import Form from "components/organisms/Form";
import GoogleButton from "components/atoms/GoogleButton";
import validations from "util/validations";
import codes from "util/errorCodes";
import useUser from "lib/useUser";

interface FormValues {
  email: string;
  password: string;
}
const initialValues: FormValues = {
  email: "",
  password: "",
};

interface FormProps {}

const validationSchema = Yup.object<FormValues>({
  email: validations.email,
  password: validations.password,
});

const InnerForm = (props: FormikProps<FormValues>) => (
  <Form
    onSubmit={props.handleSubmit}
    title="sign in"
    extraContent={<GoogleButton text="sign in with google" />}
  >
    <Field type="email" name="email" label="Email" />
    <Field type="password" name="password" label="Password" />
    <ThemedButton disabled={props.isSubmitting} text="Submit" type="submit" />
  </Form>
);

const SignIn = () => {
  const { mutateUser } = useUser({ redirectTo: "/" });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, setFieldError }: FormikBag<FormProps, FormValues>
  ) => {
    // Sign in the user.
    const res = await signIn(values.email, values.password);

    if (!res.success) {
      switch (res.code) {
        case codes.signin.emailNotVerfied: {
          setFieldError(
            "email",
            "This email is not verified. Please check your inbox"
          );
          break;
        }
        case codes.signin.passwordIncorrect: {
          setFieldError("password", "Te password inserted is incorrect");
          break;
        }
        case codes.signin.userNotFound: {
          setFieldError("email", "The user does not exist");
          break;
        }
        default: {
          setFieldError("email", `Sorry, this error ocurred: "${res.error}"`);
          break;
        }
      }
    } else {
      await mutateUser(res.user);
    }

    setSubmitting(false);
  };

  const SigninForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => initialValues,
    validationSchema,
    handleSubmit,
  })(InnerForm);

  return (
    <>
      <Head>
        <title>{"Silk&Rock - Sign In"}</title>
      </Head>
      <SigninForm />
    </>
  );
};
export default SignIn;
