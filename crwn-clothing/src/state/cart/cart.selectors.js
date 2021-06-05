import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

//Memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
