<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in CART" :key="item.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge bg-secondary"
            @click.prevent="removeProdFromCart(item.product)"
            >Remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ${{ TOTAL }}</span>
      <a href="#" @click.prevent="clearCart">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["CART", "TOTAL"]),
  },
  methods: {
    ...mapActions(["REMOVE_PRODUCT_FROM_CART", "CLEAR_CART"]),
    removeProdFromCart(product) {
      this.REMOVE_PRODUCT_FROM_CART(product);
    },
    clearCart() {
      this.CLEAR_CART();
    },
  },
};
</script>

<style scoped></style>
