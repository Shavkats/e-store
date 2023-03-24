<template>
  <div>
    <AppNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
    <NotificationList />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import NotificationList from './components/NotificationsList.vue'
export default {
  name: "App",
  components: {
    AppNavbar,
    NotificationList
  },
};
</script>

<style></style>
