import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as LogoSmall } from "../../assets/crownSmall.svg";
import { ReactComponent as Logo13 } from "../../assets/13.svg";

import { connect } from "react-redux";
import { Redirect } from "react-router";
import { useWindowSize } from "../../hooks/windows-resize/windows-resize";

import { createStructuredSelector } from "reselect";
import { selectMobileMenuVisibility } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import MobileMenuIcon from "../mobile-menu-icon/mobile-menu-icon.component";
import MobileMenuDropdown from "../mobile-menu-dropdown/mobile-menu-dropdown.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SearchBarContainer,
  SearchInput,
  SearchInputContainer
} from "./header.styles";

const Header = ({
  currentUser,
  cartHidden,
  signOutStart,
  mobileMenuHidden
}) => {
  const [redirect, setRedirect] = useState(false);
  const [inputtedSearchedItems, setInputtedSearchedItems] = useState("");

  useEffect(() => {
    setRedirect(false);
  }, [redirect]);

  const handleChange = e => {
    setInputtedSearchedItems(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setRedirect(true);
  };

  const handleRedirect = () => {
    return (
      <>
        <Redirect
          to={{
            pathname: "/search",
            state: { searchedItems: inputtedSearchedItems }
          }}
        />
      </>
    );
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        {useWindowSize()[0] > 800 ? <Logo /> : <LogoSmall />}
      </LogoContainer>

      <SearchBarContainer>
        {redirect ? handleRedirect() : null}
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <SearchInputContainer>
            <SearchInput
              placeholder="Search products, e.g: Nike"
              type="text"
              onChange={handleChange}
            ></SearchInput>
          </SearchInputContainer>
          <CustomButton type="submit" searchButton>
            {" "}
            <Logo13 />{" "}
          </CustomButton>
        </form>
      </SearchBarContainer>
      <OptionsContainer>
        {useWindowSize()[0] < 650 ? (
          <MobileMenuIcon />
        ) : (
          <>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/checkout">CHECKOUT</OptionLink>
            {currentUser ? (
              <OptionLink as="div" onClick={signOutStart}>
                SIGN OUT
              </OptionLink>
            ) : (
              <OptionLink to="/signin">SIGN-IN</OptionLink>
            )}
          </>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
      {mobileMenuHidden ? null : <MobileMenuDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  mobileMenuHidden: selectMobileMenuVisibility
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
