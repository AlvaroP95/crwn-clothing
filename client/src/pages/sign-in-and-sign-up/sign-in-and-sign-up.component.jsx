import React from "react";

import SignInPage from "../../components/sign-in/sign-in.container";
import SignUp from "../../components/sign-up/sign-up.component";

import {
  SignInAndSignUpContainer,
  HorizontalRule
} from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInPage />
    <HorizontalRule />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
