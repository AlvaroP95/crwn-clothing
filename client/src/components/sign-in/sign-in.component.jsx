import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import { Formik } from "formik";
import * as Yup from "yup";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address")
      .max(255, "Too Long!")
      .required("Email required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or more")
      .max(30, "Password too long!")
      .required("Password required")
  });

  return (
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <span>With your email and password or Google</span>

      <Formik
        initialValues={{
          name: "",
          email: "",
          country: "",
          postalCode: ""
        }}
        validationSchema={ValidationSchema}
        validate={values => {
          let errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          emailSignInStart(values.email, values.password);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="email"
              touched={touched.email}
              error={errors.email}
            />
            <FormInput
              name="password"
              type="password"
              value={values.password}
              handleChange={handleChange}
              onBlur={handleBlur}
              label="password"
              touched={touched.password}
              error={errors.password}
            />
            <ButtonsBarContainer>
              <CustomButton type="submit"> Sign in </CustomButton>
              <CustomButton
                type="button"
                onClick={googleSignInStart}
                isGoogleSignIn
              >
                Sign in with Google
              </CustomButton>
            </ButtonsBarContainer>
          </form>
        )}
      </Formik>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
