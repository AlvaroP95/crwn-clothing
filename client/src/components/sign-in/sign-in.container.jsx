import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectIsUserLogging } from "../../redux/user/user.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import SignIn from "./sign-in.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserLogging
});

const SignInPage = connect(mapStateToProps)(WithSpinner(SignIn));

export default SignInPage;
