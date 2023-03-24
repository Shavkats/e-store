<template>
  <div class="col-3 mt-1" style="min-width: 250px;">
    <div class="card h-100 text-left">
      <img
        :src="product.image"
        alt=""
        class="p-3"
        style="width: 80%; height: 250px"
      />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title.substring(0, 12)
          }}</router-link>
        </h4>
        <strong>$ {{ product.price.toFixed(2) }}</strong>
        <p class="card-text">{{product.description.substring(0, 25)}} ...</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["ADD_PRODUCT_TO_CART"]),
    addToCart() {
      this.ADD_PRODUCT_TO_CART({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped></style>
