<template>
  <div class="row mt-5" v-if="PRODUCT">
    <div class="col-4">
      <img :src="PRODUCT.image" alt="" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ PRODUCT.title }}</h1>
      <h3>{{ PRODUCT.price }}</h3>
      <div class="d-flex">
        <input
          type="text"
          v-model.number="quantity"
          class="text-center col-1 mr-2 p-1"
        />
        <button class="btn btn-primary ms-2" @click="addToCart()">
          Add to cart
        </button>
      </div>
      <p class="mt-4">{{ PRODUCT.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["PRODUCT"]),
  },
  data() {
    return {
      quantity: 1,
    };
  },
  mounted() {
    this.GET_PRODUCT(this.$route.params.id);
  },
  methods: {
    ...mapActions(["GET_PRODUCT", "ADD_PRODUCT_TO_CART"]),
    addToCart() {
      this.ADD_PRODUCT_TO_CART({
        product: this.PRODUCT,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style scoped></style>
