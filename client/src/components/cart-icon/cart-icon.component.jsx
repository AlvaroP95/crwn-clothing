import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  selectCartItemsCount,
  selectCartHidden
} from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ShoppingIcon,
  ShoppingIconActive,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => (
  <CartContainer onClick={toggleCartHidden}>
    {hidden ? <ShoppingIcon /> : <ShoppingIconActive />}

    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  //20. Selectors in Redux. 21. Reselect Library
  //Selectors allow components to not re-render whenever mapStateToProps is called. Components render only when the corresponding values/state updates
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
