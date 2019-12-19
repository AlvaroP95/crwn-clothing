import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { ReactComponent as TrashIconSVG } from "../../assets/icons8-trash.svg";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import { clearCart } from "../../redux/cart/cart.actions";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TrashIconContainer,
  WarningContainer,
  StartAddingMessage
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total, clearCart }) => {
  return (
    <div>
      {cartItems.length > 0 ? (
        <CheckoutPageContainer>
          <CheckoutHeaderContainer>
            <HeaderBlockContainer>
              <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              <span className="full-description">Description</span>
              <span className="short-description">Descr.</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
              <span className="full-remove">Remove</span>
              <span className="short-remove">Rem.</span>
            </HeaderBlockContainer>
          </CheckoutHeaderContainer>
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <TrashIconContainer onClick={clearCart}>
            <TrashIconSVG />
          </TrashIconContainer>
          <TotalContainer>TOTAL: ${total}</TotalContainer>
          <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </WarningContainer>
          <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
      ) : (
        <StartAddingMessage>Start adding items to checkout</StartAddingMessage>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
