const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((a, b) => (a += b.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (a, b) => (a += b.price * b.quantity),
    0
  )
);
