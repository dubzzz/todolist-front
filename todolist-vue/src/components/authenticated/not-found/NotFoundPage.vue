<template>
  <div id="not-found-page">
    <md-card id="not-found-card">
      <md-card-media>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Wrong_Way_Go_Back.svg"
          alt="Back hoome"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title">Wrong way</div>
        <div class="md-subhead">The page you are looking for does not exist</div>
      </md-card-header>

      <md-card-actions>
        <md-button v-on:click="backHome()">Back home</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Vue from "vue";
import { MdButton, MdCard } from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdCard);

export default {
  name: "NotFoundPage",
  methods: {
    backHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#not-found-page {
  text-align: center;
}
#not-found-card {
  max-width: 320px;
  display: inline-block;
}
</style>
