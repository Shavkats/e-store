export default {
  PRODUCTS(state) {
    return state.products;
  },
  CART(state) {
    return state.cart;
  },
  PRODUCT(state) {
    return state.product;
  },
  TOTAL(state) {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    return total.toFixed(2);
  },
  NOTIFICATIONS(state) {
    return state.notifications;
  },
};
