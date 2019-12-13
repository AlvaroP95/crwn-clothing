//SIGN IN ANDANDO

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import { Formik } from "formik";
import * as Yup from "yup";

import { createStructuredSelector } from "reselect";
import {
  selectHasAuthenticationError,
  selectUserInputsBeforeLogin
} from "../../redux/user/user.selectors";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./sign-in.styles";

const SignIn = ({
  emailSignInStart,
  googleSignInStart,
  userLogError,
  userInputsBeforeLogin
}) => {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address.")
      .max(80, "Email too long.")
      .required("Email required."),
    password: Yup.string()
      .min(6, "Password must be 6 characters or more.")
      .max(30, "Password too long.")
      .required("Password required.")
  });

  const [err, setErr] = useState(userLogError); //
  const [emailError, setEmailError] = useState("");
  const [emailBeforeError, setEmailBeforeError] = useState("");
  const [passError, setPassError] = useState("");
  useEffect(() => {
    if (userLogError) {
      switch (userLogError.code) {
        case "auth/wrong-password":
          console.log("pasw has error", userLogError);
          setPassError(userLogError.message);
          console.log(passError);
          setEmailBeforeError(userInputsBeforeLogin.email);
          break;
        case "auth/user-not-found":
        case "Error: Too many unsuccessful login attempts. Please try again later":
          console.log("email has error", userInputsBeforeLogin.login);
          setEmailError(userLogError.message);
          setEmailBeforeError(userInputsBeforeLogin.email);
          break;
        default:
          console.log("something has error", userLogError);

          break;
      }
    }

    // return () => {
    //   "cleanup";
    // };
  }, [passError]);

  // if (
  //   err ==
  //   "Error: The password is invalid or the user does not have a password."
  // ) {
  //   console.log("has pasw error");
  //   // setPasswordError(err);
  //   setErr();
  // } else if (
  //   err ==
  //   "Error: The password is invalid or the user does not have a password."
  // ) {
  //   console.log("has pasw error");
  //   // setPasswordError(err);
  //   setErr();
  // }

  return (
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <span>With your email and password or Google</span>

      <Formik
        initialValues={{
          email: emailBeforeError,
          password: ""
        }}
        validationSchema={ValidationSchema}
        validate={values => {
          let errors = {};
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // setErr(values.email);
          emailSignInStart(values.email, values.password);
          resetForm();
          setSubmitting(false);
        }}
        enableReinitialize={true}
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
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
              label="email"
              touched={touched.email}
              error={emailError ? emailError : errors.email}
              hasAttemptedAuthError={userLogError ? true : false}
            />
            <FormInput
              name="password"
              type="password"
              value={values.password}
              handleChange={handleChange}
              onBlur={handleBlur}
              label="password"
              touched={touched.password}
              error={passError ? passError : errors.password}
              hasAttemptedAuthError={userLogError ? true : false}
            />
            <ButtonsBarContainer>
              <CustomButton className="doubleButton" type="submit">
                {" "}
                Sign in{" "}
              </CustomButton>
              <CustomButton
                className="doubleButton"
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

const mapStateToProps = createStructuredSelector({
  userLogError: selectHasAuthenticationError,
  userInputsBeforeLogin: selectUserInputsBeforeLogin
});
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
