export default {
  setCatalog(state, products) {
    state.products = products;
  },
  getProduct(state, product) {
    state.product = product;
  },
  addProductToCart(state, { product, quantity }) {
    let productInCart = state.cart.find((item) => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      state.cart.push({ product, quantity });
    }
  },
  removeProductFromCart(state, product) {
    state.cart = state.cart.filter((item) => {
      return item.product.id !== product.id;
    });
  },
  clearCart(state) {
    state.cart = [];
  },
  addNotification(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
    });
  },
  removeNotification(state, notification) {
    state.notifications = state.notifications.filter((i) => {
      i.id !== notification.id;
    });
  },
};
