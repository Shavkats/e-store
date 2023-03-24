<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    {{ notification.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  methods: {
    ...mapActions(["REMOVE_NOTIFICATION"]),
  },
  created() {
    this.timeout = setTimeout(() => {
      this.REMOVE_NOTIFICATION(this.notification);
    }, 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style scoped></style>
