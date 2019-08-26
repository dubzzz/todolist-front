<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" v-on:click="toggleMenu()" v-if="!expandedMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title" id="toolbar-label">Welcome {{username}}</h3>
        <md-badge v-bind:md-content="numTodos">
          <md-button class="md-icon-button">
            <md-icon>shopping_cart</md-icon>
          </md-button>
        </md-badge>
        <md-button class="md-icon-button" v-on:click="logout()">
          <md-icon>power_settings_new</md-icon>
        </md-button>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="expandedMenu" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Menu</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" v-on:click="toggleMenu()">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item to="/">
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Todos</span>
          </md-list-item>
          <md-list-item to="/learn-more">
            <md-icon>help</md-icon>
            <span class="md-list-item-text">Learn more</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { AuthenticationStatus } from "../../store/models/authentication";

export default {
  name: "AuthenticatedPage",
  data: () => ({ expandedMenu: false }),
  computed: {
    username() {
      return this.$store.state.authentication.username;
    },
    isLogged() {
      return (
        this.$store.state.authentication.status ===
        AuthenticationStatus.Authenticated
      );
    },
    numTodos() {
      return this.$store.state.todolist.todos.length;
    }
  },
  methods: {
    toggleMenu() {
      this.expandedMenu = !this.expandedMenu;
    },
    logout() {
      this.$store.dispatch("authentication/logout");
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
  },
  mounted() {
    const token = this.$store.state.authentication.token;
    this.$store.dispatch("todolist/requestTodolistUpdates", {
      token,
      requester: this
    });
  },
  destroyed() {
    this.$store.dispatch("todolist/stopTodolistUpdates", { requester: this });
  }
};
</script>

<style scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
#toolbar-label {
  flex-grow: 1;
  text-align: left;
}
</style>
