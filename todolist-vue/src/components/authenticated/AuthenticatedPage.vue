<template>
  <div>
    <AuthenticatedHeader></AuthenticatedHeader>AuthenticatedPage
  </div>
</template>

<script>
import AuthenticatedHeader from "./AuthenticatedHeader";
import { AuthenticationStatus } from "../../store/modules/authentication";

export default {
  name: "AuthenticatedPage",
  components: { AuthenticatedHeader },
  computed: {
    isLogged() {
      return (
        this.$store.state.authentication.status ===
        AuthenticationStatus.Authenticated
      );
    }
  },
  watch: {
    isLogged: {
      immediate: true,
      handler: function() {
        if (!this.isLogged) {
          this.$router.push({
            path: "/login",
            query: { redirect: this.$router.currentRoute.fullPath }
          });
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
