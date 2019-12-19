import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleMobileMenuVisibility } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  CartDropdownContainer as MobileMenuDropdownContainer,
  CartDropdownButton as MobileMenuDropdownButton,
  CartItemsContainer as MobileMenuItemsContainer
} from "../cart-dropdown/cart-dropdown.styles";
import { OptionMobileLink } from "./mobile-menu-dropdown.styles";

const MobileMenuDropdown = ({
  toggleMobileMenuVisibility,
  history,
  currentUser,
  signOutStart
}) => (
  <MobileMenuDropdownContainer>
    <MobileMenuItemsContainer>
      <OptionMobileLink
        to="/"
        exact
        onClick={() => {
          toggleMobileMenuVisibility();
        }}
      >
        HOME
      </OptionMobileLink>
      <OptionMobileLink
        to="/shop"
        onClick={() => {
          toggleMobileMenuVisibility();
        }}
      >
        SHOP
      </OptionMobileLink>
      {currentUser ? (
        <OptionMobileLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionMobileLink>
      ) : (
        <OptionMobileLink
          to="/signin"
          onClick={() => {
            toggleMobileMenuVisibility();
          }}
        >
          SIGN-IN
        </OptionMobileLink>
      )}
    </MobileMenuItemsContainer>

    <MobileMenuDropdownButton
      onClick={() => {
        history.push("/checkout");
        toggleMobileMenuVisibility();
      }}
      dropdown
    >
      GO TO CHECKOUT
    </MobileMenuDropdownButton>
  </MobileMenuDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  toggleMobileMenuVisibility: () => dispatch(toggleMobileMenuVisibility()),
  signOutStart: () => dispatch(signOutStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MobileMenuDropdown)
);
