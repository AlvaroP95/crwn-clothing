import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import { Formik } from "formik";
import * as Yup from "yup";
import FormError from "../form-errors/form-errors";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

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

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   emailSignInStart(email, password);
  // };

  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setCredentials({ ...userCredentials, [name]: value });
  // };

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
          console.log(values.email, values.password);
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
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              // className={touched.email && errors.email ? "has-error" : null}
              label="email"
              touched={touched.email}
              error={errors.email}
              // required //
            />
            {/* <FormError touched={touched.email} message={errors.email} /> */}
            <FormInput
              name="password"
              type="password"
              value={values.password}
              handleChange={handleChange}
              onBlur={handleBlur}
              // className={
              //   touched.password && errors.password ? "has-error" : null
              // }
              label="password"
              touched={touched.email}
              error={errors.password}
              // required //
            />
            {/* <FormError touched={touched.password} message={errors.password} /> */}
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
