<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link> 
        </div>
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ CART.length }} Cart
            </button>
            <div @click="$event.stopPropagation()">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Cart,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style scoped>
</style>
