import Vue from "vue";
import VueMaterial from "vue-material";
import store from "./store";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
