import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import {
  SignInAndSignUpContainer,
  HorizontalRule
} from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <HorizontalRule />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
