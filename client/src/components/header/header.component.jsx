import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Logo13 } from "../../assets/13.svg";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { Redirect } from "react-router";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
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
import { FormInputLabel } from "../form-input/form-input.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
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
        <Logo />
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
        <OptionLink as="div">XXX</OptionLink>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/checkout">CHECKOUT</OptionLink>
        {currentUser ? (
          // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          //ARE THE SAME
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN-IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
//ARE THE SAME
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
