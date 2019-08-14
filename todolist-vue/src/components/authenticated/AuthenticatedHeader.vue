<template>
  <md-toolbar class="md-primary">
    <md-button class="md-icon-button" v-on:click="toggleMenu()">
      <md-icon>menu</md-icon>
    </md-button>
    <h3 class="md-title" id="toolbar-label">Welcome {{username}}</h3>
    <md-button class="md-icon-button">
      <md-icon>shopping_cart</md-icon>
    </md-button>
    <md-button class="md-icon-button" v-on:click="logout()">
      <md-icon>power_settings_new</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
import Vue from "vue";
import { MdButton, MdIcon, MdToolbar } from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdToolbar);

export default {
  name: "AuthenticatedHeader",
  computed: {
    username() {
      return this.$store.state.authentication.username;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("authentication/logout");
    }
  }
};
</script>

<style scoped>
#toolbar-label {
  flex-grow: 1;
  text-align: left;
}
</style>