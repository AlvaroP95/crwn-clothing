import { createSelector } from "reselect";

//20. Selectors in Redux. 21. Reselect Library
//Selectors allow components to not re-render whenever mapStateToProps is called. Components render only when the corresponding values/state updates

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
