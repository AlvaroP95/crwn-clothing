import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleMobileMenuVisibility } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.actions";
import { selectMobileMenuVisibility } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.selectors";
import { closeCartMenu } from "../../redux/cart/cart.actions";

import {
  MobileMenuIcon,
  MobileMenuIconActive,
  MobileMenuIconContainer
} from "./mobile-menu-icon.styles";

const MobileMenuDropdownIcon = ({
  toggleMobileMenuVisibility,
  mobileMenuVisibility,
  closeCartMenu
}) => (
  <MobileMenuIconContainer
    onClick={() => {
      toggleMobileMenuVisibility();
      closeCartMenu();
    }}
  >
    {mobileMenuVisibility ? <MobileMenuIcon /> : <MobileMenuIconActive />}
  </MobileMenuIconContainer>
);

const mapStateToProps = createStructuredSelector({
  mobileMenuVisibility: selectMobileMenuVisibility
});

const mapDispatchToProps = dispatch => ({
  toggleMobileMenuVisibility: () => dispatch(toggleMobileMenuVisibility()),
  closeCartMenu: () => dispatch(closeCartMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenuDropdownIcon);
