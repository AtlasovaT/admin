<template>
  <div id="app">
    <div class="main-container">
      <center-container>
        <router-view />
      </center-container>
    </div>
  </div>
</template>

<script>
// import Navigation from "components/navigation";
// import SqreenFooter from "./components/footer/index.vue";

export default {
  components: {
    // SqreenFooter,
    // Navigation
  },
  name: "app",
  created: function() {
    // if (this.$store.getters.isAuthenticated) {
    //   this.$store.dispatch(USER_REQUEST);
    // }
  }
};
</script>
<style lang="scss">
@import "./assets/scss/main";
</style>
