import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle, FormContainer } from "./sign-up.styles";

import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = ({ signUpStart }) => {
  const ValidationSchema = Yup.object().shape({
    displayName: Yup.string()
      .min(4, "Display Name must be 4 characters or more.")
      .max(40, "Display Name too long.")
      .required("Display Name required."),
    email: Yup.string()
      .email("Must be a valid email address.")
      .max(80, "Email too long.")
      .required("Email required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or more.")
      .max(40, "Password too long.")
      .required("Password required."),
    confirmPassword: Yup.string()
      .min(6, "Password must be 6 characters or more.")
      .max(40, "Password too long.")
      .required("Password required.")
      .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both passwords need to be the same."
        )
      })
  });
  return (
    <SignUpContainer>
      <SignUpTitle>Sign Up</SignUpTitle>
      <span>Create an account with email and password</span>

      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={ValidationSchema}
        validate={values => {
          let errors = {};
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { displayName, email, password } = values;
          setSubmitting(true);
          signUpStart({ displayName, email, password });
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
          <FormContainer>
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <FormInput
                name="displayName"
                type="text"
                value={values.displayName}
                handleChange={handleChange}
                onBlur={handleBlur}
                label="display Name"
                touched={touched.displayName}
                error={errors.displayName}
              />
              <FormInput
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
                onBlur={handleBlur}
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
              <FormInput
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                handleChange={handleChange}
                onBlur={handleBlur}
                label="confirm password"
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
              />
              <CustomButton className="signUp" type="submit">
                SIGN UP
              </CustomButton>
            </form>
          </FormContainer>
        )}
      </Formik>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
