import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from "./cart-dropdown.styles";

import Backdrop from "../backdrop/backdrop.component";

const CartDropdown = ({ cartItems, history, dispatch, hidden }) => {
  return (
    <div>
      <Backdrop hidden={hidden} clicked={modalClosed} />

      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          )}
        </CartItemsContainer>
        <CartDropdownButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
          dropdown
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </CartDropdownContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
