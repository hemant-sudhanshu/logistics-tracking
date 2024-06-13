import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { routes, schema, strings } from "../../../constants";
import { Button, Input, Spinner } from "../../../components";

import { useAuthContext } from "../../../hooks";
import { useSignInMutation } from "../../../queries";
import { showSuccessToast, showErrorToast } from "../../../utils";

/**
 * Yup schema for sign-up page validation
 */
const SignInSchema = Yup.object().shape({
  email: schema.email, // Validation schema for email
  password: schema.password, // Validation schema for password
});

export const SignIn = () => {
  // Constants for localization
  const {
    auth: { common, signIn, signUp },
  } = strings;

  // Hooks
  const { login } = useAuthContext(); // Authentication context
  const navigate = useNavigate(); // Navigation hook

  // API call for sign in
  const { mutateAsync, isPending } = useSignInMutation();

  // Formik form configuration for sign-up form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // Call signin user api
      try {
        // Handle form submission
        const user = await mutateAsync({
          email: values.email,
          password: values.password,
        });
        console.log(JSON.stringify(user));
        if (!!user && user?.token) {
          formik.resetForm();
          login({ user, token: user?.token });
          showSuccessToast({ message: signIn.signInSuccess });
          // Navigate to home page after successful sign-in
          navigate(routes.root, { replace: true });
        }
      } catch (error) {
        // Handle sign up failure
      }
    },
  });

  return (
    <div
      className="top-0 left-0 w-screen h-screen flex  
                items-center justify-center"
    >
      <div className="w-full bg-primary p-8 md:max-w-md rounded">
        {/* Heading section */}
        <h1 className="mb-4 text-2xl font-normal md:text-3xl">
          {signIn.title}
        </h1>
        <p className="mb-4 text-sm text-light">
          {`${signIn.dontHaveAccount} `}
          {/* Link to sign-up page */}
          <Link
            className="cursor-pointer font-semibold text-color hover:text-button-hover dark:text-color-dark dark:hover:text-hover"
            to={routes.signUp}
            replace
          >
            {signUp.title}
          </Link>
        </p>

        {/* Email input field */}
        <Input
          id="email"
          label={common.emailAddress}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          autoComplete="email"
          required
        />

        {/* Password input fields */}
        <Input
          id="password"
          type="password"
          label={common.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          autoComplete="new-password"
          required
        />

        {/* Sign-in button */}
        <Button
          title={signIn.title}
          className="mt-2 w-full"
          onClick={() => formik.handleSubmit()}
        />
        {!!isPending && <Spinner />}
      </div>
    </div>
  );
};
