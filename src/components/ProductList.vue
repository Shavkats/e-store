<template>
  <div class="mt-3 mb-3 d-flex flex-wrap justify-content-center">
    <button
      className="btn btn-outline-dark me-2"
      @click="filterByCategory('all')"
    >
      All
    </button>
    <button
      className="btn btn-outline-dark me-2"
      @click="filterByCategory('men\'s clothing')"
    >
      Men's Clothing
    </button>
    <button
      className="btn btn-outline-dark me-2"
      @click="filterByCategory('women\'s clothing')"
    >
      Women's Clothing
    </button>
    <button
      className="btn btn-outline-dark me-2"
      @click="filterByCategory('jewelery')"
    >
      Jewelery
    </button>
    <button
      className="btn btn-outline-dark me-2"
      @click="filterByCategory('electronics')"
    >
      Electronics
    </button>
  </div>
  <div v-if="checkLoading">
    <Loader />
  </div>
  <div
    v-else
    class="d-flex flex-wrap justify-content-center mt-2"
    style="gap: 15px"
  >
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Loader from "./Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filtered: [],
    };
  },
  components: {
    ProductCard,
    Loader,
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    filteredProducts() {
      if (this.filtered.length) {
        return this.filtered;
      } else {
        return this.PRODUCTS;
      }
    },
    checkLoading() {
      return this.productLoading();
    },
  },
  mounted() {
    this.GET_PRODUCTS();
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    filterByCategory(category) {
      this.filtered = this.PRODUCTS.filter(function (e) {
        return e.category === category;
      });
    },
    productLoading() {
      let loading = false;
      if (this.PRODUCTS.length > 0) {
        loading = false;
      } else {
        loading = true;
      }
      return loading;
    },
  },
};
</script>

<style scoped></style>
