<template>
  <div id="login-page">
    <md-card id="login-card">
      <md-card-media>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg"
          alt="Eiffel Tower"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title">Welcome to TodoList Vue</div>
        <div class="md-subhead">Try with password: “password”</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button>Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Vue from "vue";
import { MdButton, MdCard, MdField } from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdField);

export default {
  name: "LoginPage",
  props: { redirect: String },
  data: () => ({ username: "", password: "" })
};
</script>

<style scoped>
#login-page {
  text-align: center;
}
#login-card {
  max-width: 320px;
  display: inline-block;
}
</style>
