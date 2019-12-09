import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectIsUserLogging } from "../../redux/user/user.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import SignInAndSignUp from "./sign-in-and-sign-up.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserLogging
});

const SignInAndSignUpPage = connect(mapStateToProps)(
  WithSpinner(SignInAndSignUp)
);

export default SignInAndSignUpPage;
