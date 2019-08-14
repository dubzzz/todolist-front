<template>
  <div>
    <h4>App</h4>
    <p>
      This app makes you able to maintain your todos up-to-date. Multiple users
      can access and edit the todos in parallel*.
    </p>
    <p>
      <em>
        Parallel: users have to share the same local storage (be on same
        browser)
      </em>
    </p>
    <h4>APIs</h4>
    <p>
      For the sake of the demo, all the API calls are mocked. In order to be as
      realistic as possible they are delayed and subject to failures. Any data
      that needs to be persisted such as Authentication tokens or todos are stored
      within the local storage of the browser in use.
    </p>
    <h4>Revoke token</h4>
    <p>
      The token used and stored to keep the user connected to the API can be
      revoked by updating the value of
      <em>window.validToken</em> in the console
      or by clicking
      <br />
      <md-button class="md-primary" v-on:click="resetToken()">here</md-button>.
    </p>
  </div>
</template>

<script>
export default {
  name: "LearnMorePage",
  methods: {
    resetToken() {
      window.validToken = Math.random()
        .toString(16)
        .substr(2);
    }
  }
};
</script>

<style scoped>
</style>
