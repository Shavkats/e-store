import { createStore } from "vuex";
import mutations from "./mutations/mutations";
import actions from "./actions/actions";
import getters from "./getters/getters";

const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
      notifications: [],
      product: null,
    };
  },

  mutations,
  actions,
  getters,
});

export default store;
