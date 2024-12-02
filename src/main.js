import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import "./main.scss";
import VueFormulate from "@braid/vue-formulate";
import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // Remplacer material-design-icons-iconfont
var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;
Vue.use(VueFormulate);
Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");