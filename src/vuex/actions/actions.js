import axios from "axios";

export default {
  async GET_PRODUCTS({ commit }) {
    try {
      const products = await axios("https://fakestoreapi.com/products", {
        method: "GET",
      });
      commit("setCatalog", products.data);
      return products;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async GET_PRODUCT({ commit }, id) {
    try {
      const product = await axios(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      commit("getProduct", product.data);
      return product;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  ADD_PRODUCT_TO_CART({ commit, dispatch }, { product, quantity }) {
    commit("addProductToCart", { product, quantity });
    dispatch("ADD_NOTIFICATION", {
      type: "success",
      message: "Product added to cart",
    });
  },
  REMOVE_PRODUCT_FROM_CART({ commit, dispatch }, product) {
    commit("removeProductFromCart", product);
    dispatch("ADD_NOTIFICATION", {
      type: "success",
      message: "Product removed from cart",
    });
  },
  CLEAR_CART({ commit, dispatch }) {
    commit("clearCart");
    dispatch("ADD_NOTIFICATION", {
      type: "success",
      message: "All products removed from cart",
    });
  },
  ADD_NOTIFICATION({ commit }, notification) {
    commit("addNotification", notification);
  },
  REMOVE_NOTIFICATION({ commit }, notification) {
    commit("removeNotification", notification);
  },
};
