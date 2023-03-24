<template>
  <div class="notification-list">
    <NotificationItem
      v-for="notification in NOTIFICATIONS"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationItem from "./NotificationItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NotificationItem,
  },
  computed: {
    ...mapGetters(["NOTIFICATIONS"]),
  },
};
</script>

<style scoped>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
