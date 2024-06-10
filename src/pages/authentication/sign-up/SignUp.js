import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { routes, schema, strings } from "../../../constants";
import { Button, Checkbox, Input, Spinner } from "../../../components";

import { useSignUpMutation } from "../../../queries";
import { showSuccessToast } from "../../../utils";
/**
 * Yup schema for sign-up page validation
 */
const SignUpSchema = Yup.object().shape({
  email: schema.email, // Validation schema for email
  password: schema.password, // Validation schema for password
  firstName: schema.firstName, // Validation schema for first name
  lastName: schema.lastName, // Validation schema for last name
  confirmPassword: schema.confirmPassword, // Validation schema for password confirmation
  acceptTerms: schema.acceptTerms,
});

export const SignUp = () => {
  // Constants for localization
  const {
    auth: { common, signIn, signUp },
  } = strings;

  // Navigation hook
  const navigate = useNavigate();

  // API call for sign-up
  const { mutateAsync, isPending } = useSignUpMutation();

  // Formik form configuration for sign-up form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // Call signup user api
      try {
        await mutateAsync({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        });
        formik.resetForm();
        // If sign up succeeds, show success message
        showSuccessToast({ message: signUp.signUpSuccess });
        navigate(routes.signIn, { replace: true });
      } catch (error) {
        // Handle sign up failure
        console.log(error);
      }
    },
  });

  return (
    <div className="top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="bg-primary p-8 md:max-w-md rounded">
        {/* Heading section */}
        <h1 className="mb-4 text-2xl font-normal md:text-3xl">
          {signUp.title}
        </h1>
        <p className="mb-4 text-sm text-light dark:text-light-dark">
          {`${signUp.alreadyHaveAccount} `}
          {/* Link to sign-in page */}
          <Link
            className="cursor-pointer font-semibold text-color hover:text-button-hover dark:text-color-dark dark:hover:text-hover"
            to={routes.signIn}
            replace
          >
            {signIn.title}
          </Link>
        </p>

        {/* First name and last name input fields */}
        <div className="flex flex-col lg:flex-row">
          <Input
            id="firstName"
            label={common.fName}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
            required
          />
          {/* Spacer for responsive design */}
          <div className="hidden w-4 lg:block" />
          <Input
            id="lastName"
            label={common.lName}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
            required
          />
        </div>

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
        <Input
          id="confirmPassword"
          type="password"
          label={common.confirmPassword}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.errors.confirmPassword}
          autoComplete="new-password"
          required
        />

        {/* Accepts terms of use and privacy policy */}
        <Checkbox
          id="acceptTerms"
          checked={formik.values.acceptTerms}
          onChange={formik.handleChange}
          error={formik.errors?.acceptTerms}
        >
          <label
            htmlFor="acceptTerms"
            className="ms-2 text-sm text-light dark:text-light-dark"
          >
            {common.iAccept}{" "}
            <Link
              to={routes.termsCondition}
              className="font-medium text-color underline dark:text-color-dark"
            >
              {common.termsOfUse}
            </Link>{" "}
            {common.and}{" "}
            <Link
              to={routes.privacyPolicy}
              className="font-medium text-color underline dark:text-color-dark"
            >
              {common.privacyPolicy}
            </Link>
          </label>
        </Checkbox>

        {/* Sign-up button */}
        <Button
          title={signUp.title}
          className="mt-2 w-full"
          onClick={() => formik.handleSubmit()}
        />
        {!!isPending && <Spinner />}
      </div>
    </div>
  );
};
