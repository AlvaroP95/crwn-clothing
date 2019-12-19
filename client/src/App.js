import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import "./components/header/header.styles.scss";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ItemAddedNotificationsContainer from "./components/item-added-notifications/item-added-notifications.component";
import { GlobalStyle } from "./global.styles";
import * as serviceWorker from "./serviceWorker";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.container")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SearchPage = lazy(() => import("./pages/searched-items/searched-items"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route exact path="/search" component={SearchPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <ItemAddedNotificationsContainer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

serviceWorker.register();
