import Vue from "vue";
import VueRouter from "vue-router";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
